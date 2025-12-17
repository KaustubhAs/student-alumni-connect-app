import React, { useState } from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { performadminInsertTableRepository } from '../store/adminInsertTable/actions';
import { loadCheckUniqueUsername } from '../store/uniqueUsername/actions';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: block;
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

/* istanbul ignore next */
const SignUpForm = () => {

const [resultUnique, setResultUnique] = React.useState('unique');

/* istanbul ignore next */
const handleCheckUnique = async () => {
    const result = await dispatch(loadCheckUniqueUsername(update_UserName));
    if (result.backend[0].matched === 0) {
        setResultUnique('unique');
    } else {
        setResultUnique('matched');
    }
}

const [update_FirstName, set_update_FirstName] = useState("");
const [update_LastName, set_update_LastName] = useState("");
const [update_UserName, set_update_UserName] = useState("");
const [update_Pronouns, set_update_Pronouns] = useState("");
const [update_Bio, set_update_Bio] = useState("");
const [update_Phone, set_update_Phone] = useState("");
const [update_Email, set_update_Email] = useState("");
const [update_Mentoring, set_update_Mentoring] = useState("");
const update_ProfilePic = "";
const update_LastUpdated = "";
const [update_Password, set_update_Password] = useState("");
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
const [update_Street, set_update_Street] = useState("");
const [update_City, set_update_City] = useState("");
const [update_District, set_update_District] = useState("");
const [update_State, set_update_State] = useState("");
const [update_Country, set_update_Country] = useState("");
const [update_Postcode, set_update_Postcode] = useState("");
const update_Latitude = "";
const update_Longitude = "";
const [update_JobTitle, set_update_JobTitle] = useState("");

const handle_FirstName = (event) => {set_update_FirstName(event.target.value);};
const handle_LastName = (event) => {set_update_LastName(event.target.value)};
const handle_UserName = (event) => {set_update_UserName(event.target.value);};
// const handle_ProfilePic = (event) => {set_update_ProfilePic(event.target.value);};
const handle_Pronouns = (event) => {set_update_Pronouns(event.target.value)};
const handle_Bio = (event) => {set_update_Bio(event.target.value)};
const handle_Phone = (event) => {set_update_Phone(event.target.value)};
const handle_Email = (event) => {set_update_Email(event.target.value);};
const handle_JobTitle = (event) => {set_update_JobTitle(event.target.value);};
const handle_Mentoring = (event) => {set_update_Mentoring(event.target.value)};
// const handle_LastUpdated = (event) => {set_update_LastUpdated(event.target.value);};
const handle_Password = (event) => {set_update_Password(event.target.value);};
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
const handle_Street = (event) => {set_update_Street(event.target.value)};
const handle_City = (event) => {set_update_City(event.target.value)};
const handle_District = (event) => {set_update_District(event.target.value)};
const handle_State = (event) => {set_update_State(event.target.value)};
const handle_Country = (event) => {set_update_Country(event.target.value)};
const handle_Postcode = (event) => {set_update_Postcode(event.target.value)};
//   const handle_Latitude = (event) => {set_update_Latitude(event.target.value)};
//   const handle_Longitude = (event) => {set_update_Longitude(event.target.value)};


const [activeStep, setActiveStep] = React.useState(0);

const dispatch = useDispatch();

/* istanbul ignore next */
const editData_AdminInsertTable = {
    "FullName": update_FirstName + " " + update_LastName === " " ? "" : update_FirstName + " " + update_LastName,
    "FirstName": update_FirstName,
    "LastName": update_LastName,
    "UserName": update_UserName,
    "ProfilePic": update_ProfilePic,
    "Pronouns": update_Pronouns,
    "Bio": update_Bio,
    "Phone": update_Phone,
    "Email": update_Email,
    "JobTitle": update_JobTitle,
    "Mentoring": update_Mentoring,
    "LastUpdate": update_LastUpdated,
    "Password": update_Password,
    "University": update_University,
    "Major1": update_Major1,
    "Major2": update_Major2,
    "ClassYear": update_ClassYear === "" ? 0 : parseInt(update_ClassYear),
    "UniOrg1": update_UniOrg1,
    "UniOrg2": update_UniOrg2,
    "UniOrg3": update_UniOrg3,
    "OtherEduDegree": update_OtherEduDegree,
    "OtherEduMajor": update_OtherEduMajor,
    "OtherEduClassYear": update_OtherEduClassYear === "" ? 0 : parseInt(update_OtherEduClassYear),
    "CompanyName": update_CompanyName,
    "CompanyContactInfo": update_CompanyContactInfo,
    "Industry": update_Industry,
    "Street": update_Street,
    "City": update_City,
    "District": update_District,
    "State": update_State,
    "Country": update_Country,
    "Postcode": update_Postcode,
    "Latitude": update_Latitude,
    "Longitude": update_Longitude
}

/* istanbul ignore next */
const handleFinal_UserTable = async () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    await dispatch(performadminInsertTableRepository(editData_AdminInsertTable));
};

const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
};

const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
};

return (
    <Wrapper>
    <Box sx={{ maxWidth: 1000, marginTop: '20px'}}>
        <Stepper activeStep={activeStep} orientation="vertical">
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
                            required
                            id="outlined-required"
                            label="Username"
                            onChange={handle_UserName}
                            error={
                            /* istanbul ignore next */
                            resultUnique !== "unique" ? true : false}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Firstname"
                            onChange={handle_FirstName}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            required
                            id="outlined-disabled"
                            label="Lastname"
                            onChange={handle_LastName}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            required
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            onChange={handle_Password}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            id="outlined-disabled"
                            label="Pronouns"
                            onChange={handle_Pronouns}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            id="outlined-disabled"
                            label="Bio"
                            onChange={handle_Bio}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            id="outlined-disabled"
                            label="Phone"
                            onChange={handle_Phone}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            required
                            id="outlined-disabled"
                            label="Email"
                            onChange={handle_Email}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            required
                            id="outlined-disabled"
                            label="Mentoring"
                            onChange={handle_Mentoring}
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
                            variant="text"
                            onClick={handleCheckUnique}
                            sx={{ mt: 1, mr: 1 }}
                        >
                        Check Username Uniqueness
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
                            onChange={handle_University}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            id="outlined-disabled"
                            label="Major 1"
                            onChange={handle_Major1}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Major 2"
                            onChange={handle_Major2}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            id="outlined-read-only-input"
                            label="Class Year"
                            onChange={handle_ClassYear}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            id="outlined-disabled"
                            label="College Organization 1"
                            onChange={handle_UniOrg1}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            id="outlined-disabled"
                            label="College Organization 2"
                            onChange={handle_UniOrg2}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            id="outlined-disabled"
                            label="College Organization 3"
                            onChange={handle_UniOrg3}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            id="outlined-disabled"
                            label="Other Educational Degree"
                            onChange={handle_OtherEduDegree}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            id="outlined-disabled"
                            label="Other Educational Major"
                            onChange={handle_OtherEduMajor}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            id="outlined-disabled"
                            label="Other Educational Class Year"
                            onChange={handle_OtherEduClassYear}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            id="outlined-disabled"
                            label="Current Company"
                            onChange={handle_JobTitle}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            id="outlined-disabled"
                            label="Current Company"
                            onChange={handle_CompanyName}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            id="outlined-disabled"
                            label="Company Contact Information"
                            onChange={handle_CompanyContactInfo}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            id="outlined-disabled"
                            label="Industry"
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
                            onChange={handle_Street}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            id="outlined-disabled"
                            label="City"
                            onChange={handle_City}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="District"
                            onChange={handle_District}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            id="outlined-read-only-input"
                            label="State"
                            onChange={handle_State}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            id="outlined-disabled"
                            label="Country"
                            onChange={handle_Country}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <TextField
                            id="outlined-disabled"
                            label="Postcode"
                            onChange={handle_Postcode}
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
                        onClick={handleFinal_UserTable}
                        sx={{ mt: 1, mr: 1 }}
                    >
                        Submit 
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

export default SignUpForm;
  