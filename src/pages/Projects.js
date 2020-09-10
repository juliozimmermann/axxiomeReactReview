import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import ProjectInput from '../components/ProjectInput';
import ProjectList from '../components/ProjectList';

import api from '../services/api';

import { fetchProjects } from '../services/ProjectsService';

import { loadProjects, addProject } from '../data/actions/projects';

function Projects({ projectsFromReduxState, dispatch }) {
  useEffect(() => {
    fetchProjects().then(({ data }) => dispatch(loadProjects(data)));
  }, []);

  const handleAddProjectClick = (project) => {
    const postData = async () => {
      const { data } = await api.post('/projects', project);
      dispatch(addProject(data));
    };

    postData();
  };

  return <>
    <ProjectInput handleAddProjectClick={handleAddProjectClick} />
    <ProjectList projects={projectsFromReduxState} />
  </>;
}

const mapStateToProps = ({ projects: { data }}) => ({ projectsFromReduxState: data }); 

export default connect(mapStateToProps)(Projects);