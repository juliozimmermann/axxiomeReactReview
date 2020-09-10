import { LOAD_PROJECTS, ADD_PROJECT } from './types';

export const loadProjects = (projects) => ({
  type: LOAD_PROJECTS,
  payload: projects
});

export const addProject = (project) => ({
  type: ADD_PROJECT,
  payload: project
});
