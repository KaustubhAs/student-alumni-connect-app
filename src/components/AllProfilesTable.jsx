import { Typography } from '@mui/material';
import picture from '../images/profile.jpeg';
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

/**

  ***Description**
  
  This component displays all user profiles in a table format.
  
  ***Props**
  
  ```text
  profiles: object
  setOther: function
  ```

  ***Structure**
  
  This component contains a table display of all users.

  ```jsx
  <div>
    ...
    <Card>
        ...
        <CardContent>
            <img />
            <Stack>
                <Typography> NameOne </Typography>
                <Chip label="Available to help" </Chip>
            </Stack>
            <Typography> University </Typography>
            <Typography> Class Year </Typography>
            <Typography> Major </Typography>
            <Typography> Pronouns </Typography>
            <Typography> Job Title </Typography>
            <Typography> Bio </Typography>
        </CardContent>
                <CardContent>
            <img />
            <Stack>
                <Typography> NameTwo </Typography>
                <Chip label="Available to help" </Chip>
            </Stack>
            <Typography> University </Typography>
            <Typography> Class Year </Typography>
            <Typography> Major </Typography>
            <Typography> Pronouns </Typography>
            <Typography> Job Title </Typography>
            <Typography> Bio </Typography>
        </CardContent>
        ...
    </Card>
  </div>
  ```

  ***States**
  
  ```None```

  ***Functions**
  
  An onClick event function button to navigate 
  to a specific user when their profile card is clicked.
  ```jsx
  const handleSelect = (username) => {
    setOther(username);
    navigate(`/other-profile/${username}`);
  }
  ```

 */

const AllProfilesTable = ({profiles, setOther}) => {

    let navigate = useNavigate();

    /* istanbul ignore next */
    const handleSelect = (username) => {
        setOther(username);
        navigate(`/other-profile/${username}`);
    }

    return (
        <div>
            {
            /* istanbul ignore next */
            profiles.slice(0, 20).map(
                /* istanbul ignore next */
                profile =>
                <Card sx={{ marginLeft: '5%', marginRight: '5%', marginBottom: '2%' }} onClick={() => {handleSelect(profile.UserName);}}>
                    <CardActionArea>
                        <CardContent>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item>
                                    <img src={picture} alt='' height={'190px'} />
                                </Grid>
                                <Grid item xs={8}>
                                    <Stack direction="row" spacing={2}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {profile?.FullName}
                                        </Typography>
                                        {(profile?.Mentoring) === "Mentor" ? (
                                            <Chip label="Available to help" variant="outlined" color="success" />
                                        ) : <></> }
                                    </Stack>
                                    <Typography variant="body1" color="text.secondary">{profile?.University}</Typography>
                                    <Typography variant="body1" color="text.secondary">Class Year: {profile?.ClassYear}</Typography>
                                    <Typography variant="body1" color="text.secondary">Major: {profile?.Major1} </Typography>
                                    <Typography variant="body1" color="text.secondary">Pronouns: {profile?.Pronouns}</Typography>
                                    <Typography variant="body1" color="text.secondary">Job Title: {profile?.JobTitle}</Typography>
                                    <Typography variant="body1" color="text.secondary">Bio: {profile?.Bio}</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
                </Card>
            )}
        </div>
    )
};

export default AllProfilesTable;