import React from 'react';
// import styled from 'styled-components';
// import picture from '../images/profile.jpeg';
// import '../styles/header.css';
// import PropTypes from 'prop-types';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
// import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import pdf from "../images/pdfIcon.png";

/**

  ***Description**
  
  This component displays a resource in the static resource page.
  
  ***Props**
  
  ```None```

  ***Structure**
  
  This component contains a text card with title, text and two buttons.

  ```jsx
  <Card>
    <CardMedia />
    <CardContent>
        <Typography> Internship </Typography>
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

const Resrc = () => {
    return (
        <Card sx={{ maxWidth: 380, margin: "2%" }}>
            <CardMedia
                component="img"
                height="140"
                src={pdf}
                alt="thumbnail"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Internship
                </Typography>
                <Typography variant="body2" color="text.secondary">
                An internship is a professional learning experience that offers 
                meaningful, practical work related to a student's field of study
                or career interest.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

Resrc.prototypes = {
}

export default Resrc;
