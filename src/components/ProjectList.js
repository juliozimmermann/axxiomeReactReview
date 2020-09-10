import React from 'react';

function ProjectList({ projects }) {
  return (
    <ul>
      { projects.map(({ id, projectName, location }) => <li key={id}>{projectName} @ {location}</li>) }
    </ul>
  );
}

export default ProjectList;