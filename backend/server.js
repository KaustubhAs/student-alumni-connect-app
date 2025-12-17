const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const DB_PATH = path.join(__dirname, 'database.json');

// Helper to read DB
const readDB = () => {
    if (!fs.existsSync(DB_PATH)) {
        return { profiles: [], connections: [], users: [] };
    }
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
};

// Login Endpoint
app.get('/login', (req, res) => {
    const { UserName, Password } = req.query;
    const db = readDB();
    const user = db.users.find(u => u.UserName === UserName && u.Password === Password);

    if (user) {
        // Frontend expects array: result.login[0].matched === 1
        const userWithFullName = { ...user, FullName: `${user.FirstName} ${user.LastName}` };
        res.json([{ matched: 1, user: userWithFullName }]);
    } else {
        res.json([{ matched: 0 }]);
    }
});

// Get All Profiles
app.get('/getAllProfiles', (req, res) => {
    const db = readDB();
    const profiles = db.profiles.map(p => ({
        ...p,
        FullName: `${p.FirstName} ${p.LastName}`
    }));
    res.json(profiles);
});

// Get All Connections
app.get('/getAllConnection', (req, res) => {
    const db = readDB();
    res.json(db.connections);
});

// Get Profile By UserName
app.get('/getProfileByUserName', (req, res) => {
    const { UserName } = req.query;
    const db = readDB();
    const profile = db.profiles.find(p => p.UserName === UserName);

    if (profile) {
        profile.FullName = `${profile.FirstName} ${profile.LastName}`;
        res.json([profile]);
    } else {
        res.json([]);
    }
});

// Get Admin Status
app.get('/adminAccess', (req, res) => {
    // Frontend expects response.data.message.Admin = 1 (Yes) or 0 (No)
    // Based on: if (adminStatus?.backend?.message?.Admin === 1)

    // Check if user is "admin"
    const { UserName } = req.query;
    if (UserName === 'admin') {
        res.json({ message: { Admin: 1 } });
    } else {
        res.json({ message: { Admin: 0 } });
    }
});

app.post('/connectionInsert', (req, res) => {
    console.log("Received connectionInsert body:", req.body);
    const { NameOne, NameTwo } = req.body;
    const db = readDB();

    // Check if distinct
    if (NameOne === NameTwo) {
        res.json({ success: false, message: "Cannot connect to yourself" });
        return;
    }

    // Check if duplicate
    const exists = db.connections.some(c => c.NameOne === NameOne && c.NameTwo === NameTwo);
    if (exists) {
        res.json({ success: true, message: "Already connected" });
        return;
    }

    const newId = db.connections.length > 0 ? Math.max(...db.connections.map(c => c.ConnectionID)) + 1 : 1;
    const newConnection = { ConnectionID: newId, NameOne, NameTwo };
    db.connections.push(newConnection);

    fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 4));
    res.json({ success: true, message: "Connected" });
});

// Get Messages
app.get('/getMessages', (req, res) => {
    const { user1, user2 } = req.query;
    const db = readDB();
    if (!db.messages) db.messages = [];

    const messages = db.messages.filter(m =>
        (m.sender === user1 && m.receiver === user2) ||
        (m.sender === user2 && m.receiver === user1)
    );
    res.json(messages);
});

// Send Message
app.post('/sendMessage', (req, res) => {
    const { sender, receiver, content } = req.body;
    const db = readDB();
    if (!db.messages) db.messages = [];

    const newMessage = {
        id: Date.now(),
        sender,
        receiver,
        content,
        timestamp: new Date().toISOString()
    };

    db.messages.push(newMessage);
    fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 4));
    res.json({ success: true, message: "Message sent" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
