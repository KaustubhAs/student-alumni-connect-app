import React, { useState } from "react";
// import { useEffect } from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
// import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// import { Edit } from '@mui/icons-material';
import { performEditUserTable } from '../store/userTable/actions';
import { performEditEducationTable } from '../store/educationTable/actions';
import { performEditAddressTable } from '../store/addressTable/actions';
import { performEditCompanyInfoTable } from '../store/companyInfoTable/actions';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
display: block;
width: 70%;
margin: 2%;
`;

const steps = [
{
    label: 'Basic Information',
    description: '',
},
{
    label: 'Education & Work Information',
    description: '',
},
{
    label: 'Address Information',
    description: '',
},
];

/**

    ***Description**
    
    This is a form component for editing a user's information.
    
    ***Props**
    
    ```text
    queriedUser: string
    setAfterFind: function
    ```

    ***Structure**
    
    This component contains a 3-part form or stepper;
    with buttons for ```continue, back, complete, save```.

    ```jsx
    <Stepper>
        <Step>
        ... Basic Information
        <Textfield label="Username" />
        <Textfield label="Firstname" />
        <Textfield label="Lastname" />
        <Textfield label="Password" />
        <Textfield label="Pronouns" />
        <Textfield label="Bio" />
        <Textfield label="Phone" />
        <Textfield label="Email" />
        <Textfield label="Mentoring" />
        ...
        <Button> Continue </Button>
        <Button> Save </Button>
        </Step>
        <Step>
        ... Education & Work Information
        <Textfield label="University" />
        <Textfield label="Major 1" />
        <Textfield label="Major 2" />
        <Textfield label="Class Year" />
        <Textfield label="College Organization 1" />
        <Textfield label="College Organization 2" />
        <Textfield label="College Organization 3" />
        <Textfield label="Other Educational Degree" />
        <Textfield label="Other Educational Major" />
        <Textfield label="Other Educational Class Year" />
        <Textfield label="Current Company" />
        <Textfield label="Company Contact Information" />
        <Textfield label="Industry" />
        ...
        <Button> Continue </Button>
        <Button> Save </Button>
        <Button> Back </Button>
        </Step>
        <Step>
        ... Address Information
        <Textfield label="Street" />
        <Textfield label="City" />
        <Textfield label="District" />
        <Textfield label="State" />
        <Textfield label="Country" />
        <Textfield label="PostCode" />
        ...
        <Button> Complete </Button>
        <Button> Save </Button>
        <Button> Back </Button>
        </Step>
    </Stepper>
    ```

    ***States**
    
    Multiple useState hooks for each of the input textfield above.
    ```jsx
    const [update_FirstName, set_update_FirstName] = useState("");
    ```

    ***Functions**
    
    Multiple onChange events function for each of the input textfield above. 
    ```jsx
    const handle_FirstName = (event) => {
        set_update_FirstName(event.target.value);
    };
    ```

    A dispatch function to ```POST``` newly updated user table
    info section data ```editData_UserTable```, using api call attached to 
    ```performEditUserTable``` function.
    ```jsx
    const handleFinal_UserTable = async () => {
        await dispatch(performEditUserTable(editData_UserTable));
    };

    const editData_UserTable = {
        "FullName": update_FirstName + update_LastName,
        "FirstName": update_FirstName,
        "LastName": update_LastName,
        "CurrentUserName": update_Username,
        "NewUserName": update_Username,
        "ProfilePic": update_ProfilePic,
        "Pronouns": update_Pronouns,
        "Bio": update_Bio,
        "Phone": update_Phone,
        "Email": update_Email,
        "JobTitle": update_JobTitle,
        "Mentoring": update_Mentoring,
        "LastUpdate": edit_LastUpdate
    };
    ```

    A dispatch function to ```POST``` newly updated education ```editData_EducationTable``` 
    and company info table ```editData_CompanyInfoTable``` data, 
    using api call attached to ```performEditEducationTable```
    and ```performEditCompanyInfoTable``` function.
    ```jsx
    const handleFinal_EducationTable_CompanyInfoTable = async () => {
        await dispatch(performEditEducationTable(editData_EducationTable));
        await dispatch(performEditCompanyInfoTable(editData_CompanyInfoTable));
    };

    const editData_EducationTable = {
        "UserName": update_Username,
        "University": update_University,
        "Major1": update_Major1,
        "Major2": update_Major2,
        "ClassYear": update_ClassYear,
        "UniOrg1": update_UniOrg1,
        "UniOrg2": update_UniOrg2,
        "UniOrg3": update_UniOrg3,
        "OtherEduDegree": update_OtherEduDegree,
        "OtherEduMajor": update_OtherEduMajor,
        "OtherEduClassYear": update_OtherEduClassYear,
    }

    const editData_CompanyInfoTable = {
        "UserName": update_Username,
        "CompanyName": update_CompanyName,
        "CompanyContactInfo": update_CompanyContactInfo,
        "Industry": update_Industry,
    }
    ```

    A dispatch function to ```POST``` newly updated address info section data 
    ```editData_AddressTable```, using api call attached to 
    ```performEditAddressTable``` function.
    ```jsx
    const handleFinal_AddressTable = async () => {
        await dispatch(performEditAddressTable(editData_AddressTable));
    };

    const editData_AddressTable = {
        "UserName": update_Username,
        "Street": update_Street,
        "City": update_City,
        "District": update_District,
        "State": update_State,
        "Country": update_Country,
        "Postcode": update_Postcode,
        "Latitude": update_Latitude,
        "Longitude": update_Longitude
    }
    ```

*/

/* istanbul ignore next */
const EditComponent = ({ userProfile }) => {

    const user = userProfile?.find(e => !!e);

    const edit_UserID = user?.UserID;
    const edit_FirstName = user?.FirstName;
    const edit_LastName = user?.LastName;
    const edit_UserName = user?.UserName;
    const edit_Pronouns = user?.Pronouns;
    const edit_Bio = user?.Bio;
    const edit_Phone = user?.Phone;
    const edit_Email = user?.Email;
    const edit_Mentoring = user?.Mentoring;
    const edit_Password = user?.Password;
    const edit_Admin = user?.Admin;
    const edit_JobTitle = user?.JobTitle; // disabled
    const edit_LastUpdate = user?.LastUpdate; // disabled
    // const edit_ProfilePic = user?.ProfilePic; // disabled
    const edit_Street = user?.Street;
    const edit_City = user?.City;
    const edit_District = user?.District;
    const edit_State = user?.State;
    const edit_Country = user?.Country;
    const edit_Postcode = user?.Postcode;
    const edit_Latitude = user?.Latitude;
    const edit_Longitude = user?.Longitude;
    const edit_University = user?.University;
    const edit_Major1 = user?.Major1;
    const edit_Major2 = user?.Major2;
    const edit_ClassYear = user?.ClassYear;
    const edit_UniOrg1 = user?.UniOrg1;
    const edit_UniOrg2 = user?.UniOrg2;
    const edit_UniOrg3 = user?.UniOrg3;
    const edit_OtherEduDegree = user?.OtherEduDegree;
    const edit_OtherEduMajor = user?.OtherEduMajor;
    const edit_OtherEduClassYear = user?.OtherEduClassYear;
    const edit_CompanyName = user?.CompanyName;
    const edit_CompanyContactInfo = user?.CompanyContactInfo;
    const edit_Industry = user?.Industry;

    // console.log("edit_classYear: ", edit_ClassYear);
    // console.log("edit_OtherEduClassYear: ", edit_OtherEduClassYear);


    const [update_FirstName, set_update_FirstName] = useState("");
    const [update_LastName, set_update_LastName] = useState("");
    const [update_Pronouns, set_update_Pronouns] = useState("");
    const [update_Bio, set_update_Bio] = useState("");
    const [update_Phone, set_update_Phone] = useState("");
    const [update_Mentoring, set_update_Mentoring] = useState("");
    // const update_CurrentUserName = edit_UserName; // disabled
    // const update_NewUserName = edit_UserName; // disabled
    // const update_ProfilePic = edit_ProfilePic; // disabled
    // const update_Email = edit_Email; // disabled
    const update_JobTitle = edit_JobTitle; // disabled
    // const update_LastUpdate = edit_LastUpdate; // disabled
    const [update_Street, set_update_Street] = useState("");
    const [update_City, set_update_City] = useState("");
    const [update_District, set_update_District] = useState("");
    const [update_State, set_update_State] = useState("");
    const [update_Country, set_update_Country] = useState("");
    const [update_Postcode, set_update_Postcode] = useState("");
    const [update_Latitude, set_update_Latitude] = useState("");
    const [update_Longitude, set_update_Longitude] = useState("");
    const [update_University, set_update_University] = useState("");
    const [update_Major1, set_update_Major1] = useState("");
    const [update_Major2, set_update_Major2] = useState("");
    const [update_ClassYear, set_update_ClassYear] = useState("");
    const [update_UniOrg1, set_update_UniOrg1] = useState("");
    const [update_UniOrg2, set_update_UniOrg2] = useState("");
    const [update_UniOrg3, set_update_UniOrg3] = useState("");
    const [update_OtherEduDegree, set_update_OtherEduDegree] = useState("");
    const [update_OtherEduMajor, set_update_OtherEduMajor] = useState("");
    const [update_OtherEduClassYear, set_update_OtherEduClassYear] = useState("");
    const [update_CompanyName, set_update_CompanyName] = useState("");
    const [update_CompanyContactInfo, set_update_CompanyContactInfo] = useState("");
    const [update_Industry, set_update_Industry] = useState("");


    const handle_FirstName = (event) => {set_update_FirstName(event.target.value);};
    const handle_LastName = (event) => {set_update_LastName(event.target.value)};
    const handle_Pronouns = (event) => {set_update_Pronouns(event.target.value)};
    const handle_Bio = (event) => {set_update_Bio(event.target.value)};
    const handle_Phone = (event) => {set_update_Phone(event.target.value)};
    const handle_Mentoring = (event) => {set_update_Mentoring(event.target.value)};
    const handle_Street = (event) => {set_update_Street(event.target.value)};
    const handle_City = (event) => {set_update_City(event.target.value)};
    const handle_District = (event) => {set_update_District(event.target.value)};
    const handle_State = (event) => {set_update_State(event.target.value)};
    const handle_Country = (event) => {set_update_Country(event.target.value)};
    const handle_Postcode = (event) => {set_update_Postcode(event.target.value)};
    const handle_Latitude = (event) => {set_update_Latitude(event.target.value)};
    const handle_Longitude = (event) => {set_update_Longitude(event.target.value)};
    const handle_University = (event) => {set_update_University(event.target.value)};
    const handle_Major1 = (event) => {set_update_Major1(event.target.value)};
    const handle_Major2 = (event) => {set_update_Major2(event.target.value)};
    const handle_ClassYear = (event) => {set_update_ClassYear(event.target.value)};
    const handle_UniOrg1 = (event) => {set_update_UniOrg1(event.target.value)};
    const handle_UniOrg2 = (event) => {set_update_UniOrg2(event.target.value)};
    const handle_UniOrg3 = (event) => {set_update_UniOrg3(event.target.value)};
    const handle_OtherEduDegree = (event) => {set_update_OtherEduDegree(event.target.value)};
    const handle_OtherEduMajor = (event) => {set_update_OtherEduMajor(event.target.value)};
    const handle_OtherEduClassYear = (event) => {set_update_OtherEduClassYear(event.target.value)};
    const handle_CompanyName = (event) => {set_update_CompanyName(event.target.value)};
    const handle_CompanyContactInfo = (event) => {set_update_CompanyContactInfo(event.target.value)};
    const handle_Industry = (event) => {set_update_Industry(event.target.value)};


    const [activeStep, setActiveStep] = React.useState(0);

    const dispatch = useDispatch();

    /* istanbul ignore next */
    const editData_UserTable = {
        "FullName": (update_FirstName + " " + update_LastName === " " ? edit_FirstName + " " + edit_LastName : update_FirstName + " " + update_LastName),
        "FirstName": (update_FirstName === "" ? edit_FirstName : update_FirstName),
        "LastName": (update_LastName === "" ? edit_LastName : update_LastName),
        "CurrentUserName": edit_UserName,
        "NewUserName": edit_UserName,
        "ProfilePic": edit_Email,
        "Pronouns": (update_Pronouns === "" ? edit_Pronouns : update_Pronouns),
        "Bio": (update_Bio === "" ? edit_Bio : update_Bio),
        "Phone": (update_Phone === "" ? edit_Phone : update_Phone),
        "Email": edit_Email,
        "JobTitle": (update_JobTitle === "" ? edit_JobTitle : update_JobTitle),
        "Mentoring": (update_Mentoring === "" ? edit_Mentoring : update_Mentoring),
        "LastUpdate": edit_LastUpdate
    };

    /* istanbul ignore next */
    const editData_EducationTable = {
        "UserName": edit_UserName,
        "University": (update_University === "" ? edit_University : update_University),
        "Major1": (update_Major1 === "" ? edit_Major1 : update_Major1),
        "Major2": (update_Major2 === "" ? edit_Major2 : update_Major2),
        "ClassYear": (update_ClassYear === "" ? (edit_ClassYear !== 0 ? edit_ClassYear : 0) : parseInt(update_ClassYear)),
        "UniOrg1": (update_UniOrg1 === "" ? edit_UniOrg1 : update_UniOrg1),
        "UniOrg2": (update_UniOrg2 === "" ? edit_UniOrg2 : update_UniOrg2),
        "UniOrg3": (update_UniOrg3 === "" ? edit_UniOrg3 : update_UniOrg3),
        "OtherEduDegree": (update_OtherEduDegree === "" ? edit_OtherEduDegree : update_OtherEduDegree),
        "OtherEduMajor": (update_OtherEduMajor === "" ? edit_OtherEduDegree : update_OtherEduMajor),
        "OtherEduClassYear": (update_OtherEduClassYear === "" ? (edit_OtherEduClassYear !== 0 ? edit_OtherEduClassYear : 0) : parseInt(update_OtherEduClassYear)),
    }

    /* istanbul ignore next */
    const editData_CompanyInfoTable = {
        "UserName": edit_UserName,
        "CompanyName": (update_CompanyName === "" ? edit_CompanyName : update_CompanyName),
        "CompanyContactInfo": (update_CompanyContactInfo === "" ? edit_CompanyContactInfo : update_CompanyContactInfo),
        "Industry": (update_Industry === "" ? edit_Industry : update_Industry),
    }

    /* istanbul ignore next */
    const editData_AddressTable = {
        "UserName": edit_UserName,
        "Street": (update_Street === "" ? edit_Street : update_Street),
        "City": (update_City === "" ? edit_City : update_City),
        "District": (update_District === "" ? edit_District : update_District),
        "State": (update_State === "" ? edit_State : update_State),
        "Country": (update_Country === "" ? edit_Country : update_Country),
        "Postcode": (update_Postcode === "" ? edit_Postcode : update_Postcode),
        "Latitude": (update_Latitude === "" ? edit_Latitude : update_Latitude),
        "Longitude": (update_Longitude === "" ? edit_Longitude : update_Longitude),
    }

        /* istanbul ignore next */
    const handleFinal_UserTable = async () => {
        await dispatch(performEditUserTable(editData_UserTable));
    };

    /* istanbul ignore next */
    const handleFinal_AddressTable = async () => {
        await dispatch(performEditAddressTable(editData_AddressTable));
    };

    /* istanbul ignore next */
    const handleFinal_EducationTable_CompanyInfoTable = async () => {
        await dispatch(performEditEducationTable(editData_EducationTable));
        await dispatch(performEditCompanyInfoTable(editData_CompanyInfoTable));
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        window.location.reload(false);

    };

    return (
        <Wrapper>
        <h1>Edit Profile</h1>
        <Box sx={{ maxWidth: 1000 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
            {/* {steps.map((step, index) => ( */}
                <Step key={steps[0].label}>
                <StepLabel>
                    {steps[0].label}
                </StepLabel>
                <StepContent>
                    <Typography>{steps[0].description}</Typography>
                    
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                disabled
                                id="outlined-required"
                                label="User ID"
                                value = {edit_UserID}
                                InputLabelProps={{
                                shrink: true
                                }}
                            />
                            <TextField
                                disabled
                                id="outlined-required"
                                label="Username"
                                value={edit_UserName}
                                InputLabelProps={{
                                shrink: true
                                }}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Firstname"
                                placeholder={edit_FirstName}
                                onChange={handle_FirstName}
                                InputLabelProps={{
                                shrink: true
                                }}
                            />
                            <TextField
                                required
                                id="outlined-disabled"
                                label="Lastname"
                                placeholder={edit_LastName}
                                onChange={handle_LastName}
                                InputLabelProps={{
                                shrink: true
                                }}
                            />
                            <TextField
                                disabled
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                value={edit_Password}
                                InputLabelProps={{
                                shrink: true
                                }}
                            />
                            <TextField
                                required
                                id="outlined-disabled"
                                label="Pronouns"
                                placeholder={edit_Pronouns}
                                onChange={handle_Pronouns}
                                InputLabelProps={{
                                shrink: true
                                }}
                            />
                            <TextField
                                required
                                id="outlined-disabled"
                                label="Bio"
                                placeholder={edit_Bio}
                                onChange={handle_Bio}
                                InputLabelProps={{
                                shrink: true
                                }}
                            />
                            <TextField
                                required
                                id="outlined-disabled"
                                label="Phone"
                                placeholder={edit_Phone}
                                onChange={handle_Phone}
                                InputLabelProps={{
                                shrink: true
                                }}
                            />
                            <TextField
                                disabled
                                id="outlined-disabled"
                                label="Email"
                                value={edit_Email}
                                InputLabelProps={{
                                shrink: true
                                }}
                            />
                            <TextField
                                required
                                id="outlined-disabled"
                                label="Mentoring"
                                placeholder={edit_Mentoring}
                                onChange={handle_Mentoring}
                                InputLabelProps={{
                                shrink: true
                                }}
                            />
                            <TextField
                                disabled
                                id="outlined-disabled"
                                label="Admin"
                                value={edit_Admin}
                                InputLabelProps={{
                                shrink: true
                                }}
                            />
                        </div>
                    </Box>

                    <Box sx={{ mb: 2 }}>
                    <div>
                        <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                        >
                        Continue
                        </Button>
                        <Button
                        variant="contained"
                        onClick={handleFinal_UserTable}
                        sx={{ mt: 1, mr: 1 }}
                        >
                        Save
                        </Button>
                    </div>
                    </Box>
                </StepContent>
            </Step>

    {/* --------------------------------------------------------- */}

            <Step key={steps[1].label}>
                <StepLabel>
                    {steps[1].label}
                </StepLabel>
                <StepContent>
                    <Typography>{steps[1].description}</Typography>
                    
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                id="outlined-required"
                                label="University"
                                placeholder={edit_University}
                                onChange={handle_University}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                            <TextField
                            id="outlined-disabled"
                            label="Major 1"
                            placeholder={edit_Major1}
                                onChange={handle_Major1}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                            <TextField
                            id="outlined-password-input"
                            label="Major 2"
                            placeholder={edit_Major2}
                                onChange={handle_Major2}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                            <TextField
                            id="outlined-read-only-input"
                            label="Class Year"
                            placeholder={edit_ClassYear}
                                onChange={handle_ClassYear}
                                InputLabelProps={{
                                    shrink: true
                                }}
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            />
                            <TextField
                            id="outlined-disabled"
                            label="College Organization 1"
                            placeholder={edit_UniOrg1}
                                onChange={handle_UniOrg1}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                            <TextField
                            id="outlined-disabled"
                            label="College Organization 2"
                            placeholder={edit_UniOrg2}
                                onChange={handle_UniOrg2}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                            <TextField
                            id="outlined-disabled"
                            label="College Organization 3"
                            placeholder={edit_UniOrg3}
                                onChange={handle_UniOrg3}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                            <TextField
                            id="outlined-disabled"
                            label="Other Educational Degree"
                            placeholder={edit_OtherEduDegree}
                                onChange={handle_OtherEduDegree}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                            <TextField
                            id="outlined-disabled"
                            label="Other Educational Major"
                            placeholder={edit_OtherEduMajor}
                            onChange={handle_OtherEduMajor}
                            InputLabelProps={{
                                shrink: true
                            }}
                            />
                            <TextField
                            id="outlined-disabled"
                            label="Other Educational Class Year"
                            placeholder={edit_OtherEduClassYear}
                            onChange={handle_OtherEduClassYear}
                            InputLabelProps={{
                                shrink: true
                            }}
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            />
                            <TextField
                            id="outlined-disabled"
                            label="Current Company"
                            placeholder={edit_CompanyName}
                            onChange={handle_CompanyName}
                            InputLabelProps={{
                                shrink: true
                            }}
                            />
                            <TextField
                                id="outlined-disabled"
                                label="Company Contact Information"
                                placeholder={edit_CompanyContactInfo}
                                onChange={handle_CompanyContactInfo}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                            <TextField
                            id="outlined-disabled"
                            label="Industry"
                            placeholder={edit_Industry}
                            onChange={handle_Industry}
                            InputLabelProps={{
                                shrink: true
                            }}
                            />

                        </div>
                    </Box>

                    <Box sx={{ mb: 2 }}>
                    <div>
                        <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                        >
                        Continue
                        </Button>
                        <Button
                        variant="contained"
                        onClick={handleFinal_EducationTable_CompanyInfoTable}
                        sx={{ mt: 1, mr: 1 }}
                        >
                            Save
                        </Button>
                        <Button
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                        >
                        Back
                        </Button>
                    </div>
                    </Box>
                </StepContent>
                </Step>

    {/* --------------------------------------------------------- */}

            <Step key={steps[2].label}>
                <StepLabel>
                    {steps[2].label}
                </StepLabel>
                <StepContent>
                    <Typography>{steps[2].description}</Typography>
                    
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                id="outlined-required"
                                label="Street"
                                placeholder={edit_Street}
                                onChange={handle_Street}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                            <TextField
                            id="outlined-disabled"
                            label="City"
                            placeholder={edit_City}
                            onChange={handle_City}
                            InputLabelProps={{
                                shrink: true
                            }}
                            />
                            <TextField
                            id="outlined-password-input"
                            label="District"
                            placeholder={edit_District}
                            onChange={handle_District}
                            InputLabelProps={{
                                shrink: true
                            }}
                            />
                            <TextField
                            id="outlined-read-only-input"
                            label="State"
                            placeholder={edit_State}
                            onChange={handle_State}
                            InputLabelProps={{
                                shrink: true
                            }}
                            />
                            <TextField
                            id="outlined-disabled"
                            label="Country"
                            placeholder={edit_Country}
                            onChange={handle_Country}
                            InputLabelProps={{
                                shrink: true
                            }}
                            />
                            <TextField
                            id="outlined-disabled"
                            label="Postcode"
                            placeholder={edit_Postcode}
                            onChange={handle_Postcode}
                            InputLabelProps={{
                                shrink: true
                            }}
                            />
                            <TextField
                            id="outlined-disabled"
                            label="Latitude"
                            placeholder={edit_Latitude}
                            onChange={handle_Latitude}
                            InputLabelProps={{
                                shrink: true
                            }}
                            />
                            <TextField
                            id="outlined-disabled"
                            label="Longitude"
                            placeholder={edit_Longitude}
                            onChange={handle_Longitude}
                            InputLabelProps={{
                                shrink: true
                            }}
                            />
                        </div>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                    <div>
                        <Button
                        variant="contained"
                        onClick={handleReset}
                        sx={{ mt: 1, mr: 1 }}
                        >
                        Complete
                        </Button>
                        <Button
                        variant="contained"
                        onClick={handleFinal_AddressTable}
                        sx={{ mt: 1, mr: 1 }}
                        >
                        Save
                        </Button>
                        <Button
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                        >
                        Back
                        </Button>
                    </div>
                    </Box>
                </StepContent>
            </Step>
    {/* ---------------------------------------------------------------------- */}
            </Stepper>
        </Box>
        </Wrapper>
    );
}

export default EditComponent;