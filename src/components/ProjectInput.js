import React, { useState } from 'react';

import { ActionButton, CancelButton } from './ui/Button';

function ProjectInput({ handleAddProjectClick }) {
  const [projectName, setProjectName] = useState('');
  const [location, setLocation] = useState('');

  const handleInputProjectNameChange = ({ target: { value } }) => setProjectName(value);
  const handleInputLocationChange = ({ target: { value } }) => setLocation(value); 
 
  const handleLocalAddButtonClick = () => {
    handleAddProjectClick({ projectName, location });
    setProjectName('');
    setLocation('');
  };

  return (
    <>
      <label>Project Name</label><br />
      <input value={projectName} onChange={handleInputProjectNameChange} /><br />
      <label>Location</label><br />
      <input value={location} onChange={handleInputLocationChange} /><br />
      <ActionButton primary onClick={handleLocalAddButtonClick}>Add New Project</ActionButton><br />
      <CancelButton>Cancel Button</CancelButton><br />
    </>
  );
}

export default ProjectInput;