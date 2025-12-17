/* eslint-disable no-unused-vars */
import AllProfilesTable from './AllProfilesTable';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllProfiles } from '../store/profiles/actions';
import { getAllProfiles } from '../store/profiles/selectors';
import { loadProfilesByNameSearch } from '../store/filter/actions';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { TextField, Button } from '@mui/material';
// import { TextField, Button, Select, MenuItem } from '@mui/material';
// import industries from '../static/industries.json';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

/**

  ***Description**
  
  This component is a container for AllProfilesMap and AllProfileTable
  components, along with a filter bar.
  
  ***Props**
  
  ```text
  setOther: function
  ```

  ***Structure**
  
  This component contains a dialog box with clickable name cards.

  ```jsx
  <Grid>
    <Grid>
        ...
        <AllProfilesTable />
        <AllProfilesMap />
    </Grid>
    <Grid>
        ...
        <TextField label="First Name" />
        <TextField label="Last Name" />
        <TextField label="Mentoring" />
        <TextField label="Job Title" />
        <TextField label="University" />
        <TextField label="Company Name" />
        <TextField label="Industry" />
        <Button> Filter </Button>
        <Button> Clear </Button>
    </Grid>
  </Grid>
  ```

  ***States**
  
  Multiple useState hooks for each filter option.
  ```jsx
  const [inputFilterFirstName, setInputFilterFirstName] = useState('');
  ```

  A useState hook for display choice between table and map.
  ```jsx
  const [alignment, setAlignment] = React.useState('PROFILES_TABLE');
  ```

  A useState hook for filter result.
  ```jsx
  const [filterResult, setFilterResult] = React.useState([]);
  ```

  ***Functions**

  A selector function to get profiles from ```GET``` method 
  using api call attached to ```getAllProfiles``` function.
  ```jsx
  const directory = useSelector(getAllProfiles);
  ```

  Multiple onChange event functions to handle each filter input.
  ```jsx
  const handleByFirstName = (event) => {
    setInputFilterFirstName(event.target.value)
  };
  ```

  An onClick event button function to handle filter.
  ```jsx
  const handleFilter = async (filterData) => {
    const result = await dispatch(loadProfilesByNameSearch(filterData));
    setTrigger(true);
    setFilterResult(result.profiles);
  };

  const filterData = {
    FirstName: inputFilterFirstName,
    LastName: inputFilterLastName,
    JobTitle : inputFilterJobTitle,
    Mentoring : inputFilterMentoring,
    University : inputFilterUniversity,
    CompanyName : inputFilterCompanyName,
    Industry : inputFilterIndustry,
  };
  ```

  An onClick event button function to clear filter.
  ```jsx
  const handleClear = () => {
    setFilterResult(allProfiles);
  };
  ```

 */

const AllProfiles = ({ setOther }) => {

    const dispatch = useDispatch();
    const allProfiles = useSelector(getAllProfiles);

    const [trigger, setTrigger] = useState(false);

    const [inputFilterFirstName, setInputFilterFirstName] = useState('');
    const [inputFilterLastName, setInputFilterLastName] = useState('');
    const [inputFilterJobTitle, setInputFilterJobTitle] = useState('');
    const [inputFilterMentoring, setInputFilterMentoring] = useState('');
    const [inputFilterUniversity, setInputFilterUniversity] = useState('');
    const [inputFilterCompanyName, setInputFilterCompanyName] = useState('');
    const [inputFilterIndustry, setInputFilterIndustry] = useState('');

    const [alignment, setAlignment] = React.useState('PROFILES_TABLE');
    const [filterResult, setFilterResult] = React.useState([]);

    const handleView = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const handleByFirstName = (event) => { setInputFilterFirstName(event.target.value) };
    const handleByLastName = (event) => { setInputFilterLastName(event.target.value) };
    const handleByJobTitle = (event) => { setInputFilterJobTitle(event.target.value) };
    const handleByMentoring = (event) => { setInputFilterMentoring(event.target.value) };
    const handleByUniversity = (event) => { setInputFilterUniversity(event.target.value) };
    // const handleByClassYear = (event) => {setInputFilterClassYear(event.target.value)};
    const handleByCompanyName = (event) => { setInputFilterCompanyName(event.target.value) };
    const handleByIndustry = (event) => { setInputFilterIndustry(event.target.value) };

    /* istanbul ignore next */
    useEffect(() => {
        if (!allProfiles || allProfiles.length === 0) {
            dispatch(loadAllProfiles());
        }
    }, [allProfiles, dispatch]);

    /* istanbul ignore next */
    const handleFilter = async (filterData) => {
        const result = await dispatch(loadProfilesByNameSearch(filterData));
        setTrigger(true);
        setFilterResult(result.profiles);
    };

    const handleClear = () => {
        setFilterResult(allProfiles);
    };

    const profiles = filterResult;

    const filterData = {
        FirstName: inputFilterFirstName,
        LastName: inputFilterLastName,
        JobTitle: inputFilterJobTitle,
        Mentoring: inputFilterMentoring,
        University: inputFilterUniversity,
        // ClassYear : inputFilterClassYear,
        CompanyName: inputFilterCompanyName,
        Industry: inputFilterIndustry,
    };

    return (
        <>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={0.5} />
                <Grid item xs={11.5}>
                    {/* <h1>Directory</h1> */}
                    <h1>{''}</h1>
                </Grid>
                <Grid item xs={9}>
                    <>
                        <AllProfilesTable profiles={trigger ? profiles : allProfiles} setOther={setOther} />
                    </>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs={2}>

                    {/* <h2>Filter</h2> */}
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleView}
                        style={{ display: 'none' }} // Hidden as Map is removed
                    >
                        <ToggleButton value="PROFILES_TABLE">Table</ToggleButton>
                    </ToggleButtonGroup>

                    <TextField
                        inputProps={{ "data-testid": "all-profiles-firstname" }}
                        label="First Name"
                        id="filter-first-name"
                        style={{ display: 'block', marginTop: '20px', marginBottom: '20px' }}
                        InputLabelProps={{
                            shrink: true
                        }}
                        onChange={handleByFirstName}
                    />

                    <TextField
                        inputProps={{ "data-testid": "all-profiles-lastname" }}
                        label="Last Name"
                        id="filter-last-name"
                        style={{ display: 'block', marginBottom: '20px' }}
                        InputLabelProps={{
                            shrink: true
                        }}
                        onChange={handleByLastName}
                    />

                    <TextField
                        inputProps={{ "data-testid": "all-profiles-mentoring" }}
                        label="Mentoring"
                        id="filter-mentoring"
                        style={{ display: 'block', marginBottom: '20px' }}
                        InputLabelProps={{
                            shrink: true
                        }}
                        onChange={handleByMentoring}
                    />

                    <TextField
                        inputProps={{ "data-testid": "all-profiles-job-title" }}
                        label="Job Title"
                        id="filter-job-title"
                        style={{ display: 'block', marginBottom: '20px' }}
                        onChange={handleByJobTitle}
                        InputLabelProps={{
                            shrink: true
                        }}
                    />

                    <TextField
                        inputProps={{ "data-testid": "all-profiles-university" }}
                        label="University"
                        id="filter-university"
                        style={{ display: 'block', marginBottom: '20px' }}
                        InputLabelProps={{
                            shrink: true
                        }}
                        onChange={handleByUniversity}
                    />

                    {/* <TextField
                        label="Class Year"
                        id="filter-class-year"
                        style={{display: 'block', marginBottom: '20px'}}
                        InputLabelProps={{
                            shrink: true
                          }}
                        onChange={handleByClassYear}
                    /> */}

                    <TextField
                        inputProps={{ "data-testid": "all-profiles-company-name" }}
                        label="Company Name"
                        id="filter-company-name"
                        style={{ display: 'block', marginBottom: '20px' }}
                        InputLabelProps={{
                            shrink: true
                        }}
                        onChange={handleByCompanyName}
                    />

                    <TextField
                        inputProps={{ "data-testid": "all-profiles-industry" }}
                        label="Industry"
                        id="filter-industry"
                        style={{ display: 'block', marginBottom: '20px' }}
                        InputLabelProps={{
                            shrink: true
                        }}
                        onChange={handleByIndustry}
                    />

                    {/* <Select
                        labelId="filter-industry-label"
                        id="filter-industry"
                        value={industry}
                        label="Industry"
                        style={{display: 'block', marginBottom: '20px'}}
                        defaultValue
                    >
                        {industries.map(i => 
                            <MenuItem value={i.name}>{i.name}</MenuItem>
                        )}
                    </Select>

                    <Select
                        labelId="filter-mentoring-label"
                        id="filter-mentoring"
                        value={mentorship}
                        label="Mentorship"
                        width="250"
                        style={{display: 'block', marginBottom: '20px'}}
                    >
                        <MenuItem value={"Mentor"}>Mentor</MenuItem>
                        <MenuItem value={"Mentee"}>Mentee</MenuItem>
                    </Select> */}

                    <Button
                        variant="contained"
                        onClick={() => { handleFilter(filterData) }}
                        style={{ marginRight: '10px', marginBottom: '10px' }}
                    >
                        Filter
                    </Button>

                    <Button
                        variant="contained"
                        onClick={handleClear}
                        style={{ marginRight: '10px', marginBottom: '10px' }}
                    >
                        Clear
                    </Button>

                </Grid>
            </Grid>
        </>
    )
};

export default AllProfiles;