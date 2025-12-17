import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';

const Wrapper = styled.div`
    display: block;
    width: 70%;
    margin: 2%;
`;

/**

  ***Description**
  
  This component displays relevant information about a user.
  
  ***Props**
  
  ```text
  user: object
  headerTitle: string
  ```

  ***Structure**
  
  This component contains texts organized in grid format.

  ```jsx
  <h1>{headerTitle}</h1>
  <Grid>
    <Grid>
        <p> Firstname: </p>
        <p> Lastname: </p>
        <p> Username: </p>
        <p> Pronouns: </p>
        <p> Bio: </p>
        <p> Phone: </p>
        <p> Email: </p>
        <p> Job Title: </p>
        <p> Mentoring: </p>
        <p> Last Update: </p>
    </Grid>
    <Grid>
        <p> Company Name: </p>
        <p> Company Contact: </p>
        <p> Industry: </p>
        <p> University: </p>
        <p> Major 1: </p>
        <p> Major 2: </p>
        <p> Class Year: </p>
        <p> University Organization 1: </p>
        <p> University Organization 2: </p>
        <p> University Organization 3: </p>
        <p> Other Education Degree: </p>
        <p> Other Education Major: </p>
        <p> Other Education Class Year: </p>
    </Grid>
    <Grid>
        <p> Street: </p>
        <p> City: </p>
        <p> District: </p>
        <p> State: </p>
        <p> Country: </p>
        <p> Postcode: </p>
        <p> Latitude: </p>
        <p> Longitude: </p>
        <p> Mentoring: </p>
        <p> Last Update: </p>
    </Grid>
  </Grid>
  ```

  ***States**
  
  ```None```

  ***Functions**
  
  ```None```

 */

const UserProfile = ({ user, headerTitle }) => {
    console.log("UserProfile received:", user);
    const dude = user?.find(e => !!e);
    return (
        <>
            <Wrapper>
                <h1>{headerTitle}</h1>
                <hr />
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <p><b>Firstname:</b> {dude?.FirstName}</p>
                        <p><b>Lastname:</b> {dude?.LastName}</p>
                        <p><b>UserName:</b> {dude?.UserName}</p>
                        <p><b>Pronouns:</b> {dude?.Pronouns}</p>
                        <p><b>Status:</b> <span style={{ color: dude?.UserType === 'Alumni' ? 'blue' : 'green', fontWeight: 'bold' }}>{dude?.UserType}</span></p>
                        <p><b>Bio:</b> {dude?.Bio}</p>
                        <p><b>Phone:</b> {dude?.Phone}</p>
                        <p><b>Email:</b> {dude?.Email}</p>
                        <p><b>Job Title:</b> {dude?.JobTitle}</p>
                        <p><b>Mentoring:</b> {dude?.Mentoring}</p>
                        <p><b>Last Update:</b> {dude?.LastUpdate}</p>
                        {/* <p><b>Admin:</b> {dude?.Admin}</p> */}
                    </Grid>
                    <Grid item xs={4}>
                        <p><b>Company Name:</b> {dude?.CompanyName}</p>
                        <p><b>Company Contact Info:</b> {dude?.CompanyContactInfo}</p>
                        <p><b>Industry:</b> {dude?.Industry}</p>

                        <p><b>University:</b> {dude?.University}</p>
                        <p><b>Major 1:</b> {dude?.Major1}</p>
                        <p><b>Major 2:</b> {dude?.Major2}</p>
                        <p><b>Class Year:</b> {dude?.ClassYear}</p>
                        <p><b>University Organization 1:</b> {dude?.UniOrg1}</p>
                        <p><b>University Organization 2:</b> {dude?.UniOrg2}</p>
                        <p><b>University Organization 3:</b> {dude?.UniOrg3}</p>
                        <p><b>Other Education Degree:</b> {dude?.OtherEduDegree}</p>
                        <p><b>Other Education Major:</b> {dude?.OtherEduMajor}</p>
                        <p><b>Other Education Class Year:</b> {dude?.OtherEduClassYear}</p>
                    </Grid>
                    <Grid item xs={4}>
                        <p><b>Street:</b> {dude?.Street}</p>
                        <p><b>City:</b> {dude?.City}</p>
                        <p><b>District:</b> {dude?.District}</p>
                        <p><b>State:</b> {dude?.State}</p>
                        <p><b>Country:</b> {dude?.Country}</p>
                        <p><b>Postcode:</b> {dude?.Postcode}</p>
                        <p><b>Latitude:</b> {dude?.Latitude}</p>
                        <p><b>Longitude:</b> {dude?.Longitude}</p>
                    </Grid>
                </Grid>
            </Wrapper>
        </>
    )
};

UserProfile.prototypes = {
    user: PropTypes.object.isRequired,
}

export default UserProfile;