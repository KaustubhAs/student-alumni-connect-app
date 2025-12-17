import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';

/**

  ***Description**
  
  This component displays a job posting in the static job page.
  
  ***Props**
  
  ```None```

  ***Structure**
  
  This component contains a text card with title, text and two buttons.

  ```jsx
  <Card>
    <CardContent>
        <Typography> Hiring </Typography>
        ...
    </CardContent>
    <CardActions>
        <Butotn> Share </Typography>
        <Butotn> Learn More </Typography>
    </CardActions>
  </Card>
  ```

  ***States**
  
  ```None```

  ***Functions**
  
  ```None```

 */

const Job = () => {
    return (
        <Card sx={{ maxWidth: 380, margin: "2%" }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Hiring
                </Typography>
                <Typography variant="body2" color="text.secondary">
                XYZ
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

Job.prototypes = {
}

export default Job;
