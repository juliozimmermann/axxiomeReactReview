import React, { Component, Fragment, useState, useEffect } from 'react';

import { connect } from 'react-redux';

import ProjectInput from '../components/ProjectInput';
import ProjectList from '../components/ProjectList';

import api from '../services/api';

import { fetchProjects } from '../services/ProjectsService';

import { loadProjects, addProject } from '../data/actions/projects';

/* function Projects({ projectsFromReduxState, dispatch }) {
  useEffect(() => {
    fetchProjects().then(({ data }) => dispatch(
      {
        type: 'LOAD_PROJECTS',
        payload: data
      }
    )); //loadProjects(data)
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
} */

class Projects extends Component {

  constructor(props) {
    super(props);
    this.handleAddProjectClick = this.handleAddProjectClick.bind(this);
  }

  componentDidMount() {
    fetchProjects().then(({ data }) => this.props.dispatch(
      {
        type: 'LOAD_PROJECTS',
        payload: data
      }
    ));

    // console.log(`didMount: ${this.props.dispatch}`);
  }

  handleAddProjectClick(project) {
    // console.log(`handleAddProjectClick: ${this}`);

    //TO DO
    const postData = async () => {
      const { data } = await api.post('/projects', project);
      this.props.dispatch(addProject(data));
    };

    postData();
  }

  render() {
    return (
      <Fragment>
        <ProjectInput handleAddProjectClick={this.handleAddProjectClick} />
        <ProjectList projects={this.props.projectsFromReduxState} />
      </Fragment>
    );
  }

}

const mapStateToProps = ({ projects: { data }}) => ({ projectsFromReduxState: data }); 

export default connect(mapStateToProps)(Projects);