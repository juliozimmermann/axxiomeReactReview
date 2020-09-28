/**
 * ACTIONS
 * REDUCERS
 *  DISPATCH
 * SELECTORS
 */


 //database

const createStore = (reducers) => {
  const reducersNames = Object.keys(reducers);
  return reducersNames.reduce(
    (prev, reducerName) => ({ ...prev, [reducerName]: null }), 
  {});
};

const combine = (reducersToCombine) => ({ ...reducers, ...reducersToCombine } );

const projects = (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD_PROJECT':
      return [
        ...(state || []),
        payload
      ];
    default:
      return state;
  }
}

const filter = (state = 'ALL', { type, payload }) => {
  switch (type) {
    case 'SET_FILTER':
      return payload;
    default:
      return state;
  }
}

let reducers = combine({ projects, filter });
/**
 * {
 *    projects: () => {}, //function
 *    filter: () => {}
 * }
 */
let store = createStore(reducers);
/**
 * {
 *    projects: null, //data
 *    filter: null
 * }
 */

export const dispatch = (action) => {
  const reducersToBeCalled = Object.keys(reducers);

  reducersToBeCalled.forEach(reducerName => {
    const currentState = store[reducerName];
    const newState = reducers[reducerName](currentState, action);
    store[reducerName] = newState;
  });

  console.log(store);
};



