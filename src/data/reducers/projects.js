import { LOAD_PROJECTS, ADD_PROJECT } from '../actions/types';

const initialState = {
  loaded: false,
  data: []
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case LOAD_PROJECTS: 
      return {
        ...state,
        loaded: true,
        data: [
          ...payload
        ]
      };
    case ADD_PROJECT:
      return {
        ...state,
        data: [
          ...state.data,
          payload
        ]
      };
    default:
      return state;
  }
}

/**

{
  loaded: true/false,
  data: [
    //projects
  ]
}

 */