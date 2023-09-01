import * as React from 'react';
import "./Pricing.css"
import { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem ,Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { ComputerScience, Electrical, Mechanical, BioTech } from '../data';
import { Button } from '@mui/material';

function Pricing() {
  const [dept, setDept] = useState(ComputerScience[0]);
  const [brand, setBrand] = useState('');
  const [issueType, setIssueType] = useState('');
  const [cost, setCost] = useState('');

  function handleBrandChange(event) {
    setBrand(event.target.value);
  }

  function handleIssueTypeChange(event) {
    setIssueType(event.target.value);
  }

  const brandNames = ['Lenovo', 'HP', 'Dell', 'Asus', 'Mac', 'Realme'];

  const costData = [
    { brand: 'Lenovo', hardware: '$1100', software: '$1000' },
    { brand: 'HP', hardware: '$1300', software: '$1200' },
    { brand: 'Dell', hardware: '$1600', software: '$1500' },
    { brand: 'Asus', hardware: '$1000', software: '$900' },
    { brand: 'Mac', hardware: '$2200', software: '$2000' },
    { brand: 'Realme', hardware: '$900', software: '$800' },
  ];

  const getCost = () => {
    const selectedBrand = costData.find(x => x.brand === brand);
    const price = issueType === 'Hardware Issue' ? parseInt(selectedBrand.hardware.replace('$', '')) + 500 : parseInt(selectedBrand.software.replace('$', ''));
    setCost(`The cost of ${brand} laptop for ${issueType} is $${price}`);
  }

  return(
    <div>
      <Typography variant="h5" gutterBottom>
        <b>Select Laptop Brand</b>
      </Typography>
      <FormControl style={{ width: '600px' }}required>
        <InputLabel id="brand-select-label">
          <Typography variant="body1" fontWeight="bold">Brands</Typography>
        </InputLabel>
        <Select
          labelId="brand-select-label"
          id="brand-select"
          value={brand}
          onChange={handleBrandChange}
        >
          <MenuItem value="">Select an option</MenuItem>
          {brandNames.map((name) => (
            <MenuItem key={name} value={name}>{name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {brand && (
        <div>
          
          <div className='App-list'>
             Services Offered
            <ul>
             {dept.programsOffered.map((course)=>(
                <li key={course}> {course} </li>
             ))}
            </ul>
          </div>
          <FormControl style={{ width: '50%' }} required>
            <InputLabel id="issue-label">Issue Type</InputLabel>
            <Select
              labelId="issue-label"
              id="issuetype"
              name="issuetype"
              value={issueType}
              onChange={handleIssueTypeChange}
            >
              <MenuItem value="">Select an option</MenuItem>
              <MenuItem value="Software Issue">Software Issue</MenuItem>
              <MenuItem value="Hardware Issue">Hardware Issue</MenuItem>
            </Select>
          </FormControl>
          {brand && issueType && (
  <div>
    <div className='App-list'>
      <ul>
        {dept.programsOffered.map((course) => (
          <li key={course}> {course} </li>
        ))}
      </ul>
    </div>
    <div className='Submit-button'>
      <Button
        variant="contained"
        color="primary"
        onClick={getCost}
      >
        Get Cost
      </Button>
    </div>
  </div>
)}
{cost && (
  <Typography variant="h6" gutterBottom>
    <p>-------------------------------------------------------------------------------------</p>
    <b>{cost}</b>
    <p>-------------------------------------------------------------------------------------</p>
  </Typography>
)}
</div>
)}
        </div>
        )};
export default Pricing;