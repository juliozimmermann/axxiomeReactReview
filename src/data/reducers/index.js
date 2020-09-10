import { combineReducers } from 'redux';

import projects from './projects';
import filter from './filter';
// import resources from './resources';
// import users from './users';

export default combineReducers({ projects, filter });