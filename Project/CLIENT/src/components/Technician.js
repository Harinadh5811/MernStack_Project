import React, { useState } from 'react';
import './Technician.css';

const technicians = [
  { name: 'John Doe', age: 35, experience: '5 years', rate: 100 },
  { name: 'Jane Smith', age: 28, experience: '3 years', rate: 80 },
  { name: 'Bob Johnson', age: 42, experience: '7 years', rate: 120 },
  { name: 'Devon', age: 31, experience: '5 years', rate: 95 },
  { name: 'Harry', age: 29, experience: '2 years', rate: 75 },
];

function Technician() {
  const [selectedTechnician, setSelectedTechnician] = useState('');
  const [selectedIssueType, setSelectedIssueType] = useState('');
  const [serviceInfo, setServiceInfo] = useState('');

  const handleTechnicianChange = (event) => {
    setSelectedTechnician(event.target.value);
  };

  const handleIssueTypeChange = (event) => {
    setSelectedIssueType(event.target.value);
  };

  const handleServiceInfoClick = () => {
    let cost;
    const technician = technicians.find((tech) => tech.name === selectedTechnician);
    if (technician && selectedIssueType) {
      if (selectedIssueType === 'hardware') {
        cost = technician.rate * 1.5;
      } else if (selectedIssueType === 'software') {
        cost = technician.rate * 1.2;
      }
      setServiceInfo(`The cost for ${selectedIssueType} issue with ${selectedTechnician} is $${cost}.`);
    } else {
      setServiceInfo('Please select a technician and an issue type.');
    }
  };

  const technicianOptions = technicians.map((tech) => (
    <option key={tech.name} value={tech.name}>
      {tech.name}
    </option>
  ));
  let tableHtml = '<table><thead><tr><th>Name</th><th>Age</th><th>Experience</th></tr></thead><tbody>';
  for (const technician of technicians) {
    tableHtml += `<tr><td>${technician.name}</td><td>${technician.age}</td><td>${technician.experience}</td></tr>`;
  }
  tableHtml += '</tbody></table>';

  return (
    <>
      <div>
      <h2>Computer Technicians</h2>
      <div dangerouslySetInnerHTML={{ __html: tableHtml }} />
    </div>
    <div className="technician-dropdowns">
  <div className="technician-dropdown">
    <label htmlFor="technician-select">Select a technician:</label>
    <select id="technician-select" value={selectedTechnician} onChange={handleTechnicianChange}>
      <option value="">--Select a technician--</option>
      {technicianOptions}
    </select>
  </div>
  <div className="technician-dropdown">
    <label htmlFor="issue-select">Select an issue type:</label>
    <select id="issue-select" value={selectedIssueType} onChange={handleIssueTypeChange}>
      <option value="">--Select an issue type--</option>
      <option value="hardware">Hardware</option>
      <option value="software">Software</option>
    </select>
  </div>
</div>

      <div>
        <button onClick={handleServiceInfoClick}>Request Service Info</button>
      </div>
      <div>
        <p>{serviceInfo}</p>
      </div>
    </>
  );
}

export default Technician;