import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

/**

    ***Description**

    This is a success alert span component for admin page.

    ***Props**

    ```message: string```

    ***Structure**

    This component contains an alert.

    ```jsx
    <Alert>
        <AlertTitle> Add User </AlertTitle>
        Your request was successul! {message}
    </Alert>
    ```

    ***States**

    ```None```

    ***Functions**

    ```None```

*/

export default function AdminAlert({message}) {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Your request was successful! {message}
        </Alert>
        </Stack>
    );
}