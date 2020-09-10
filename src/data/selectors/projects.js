
export const uniqueContries = (projects = []) => {
  return projects.reduce( (prevState, { location }, index) => {
    if (!prevState.includes(location)) {
      prevState.push(location);
    }
    return prevState;
  },  ['ALL']);
};

/**
 * [{projectName: "Vast Project", location: "USA", id: 3}]
 *    {
 *      'Canada': 2,
 *      'USA': 1
 *    }
 * [{ 'name': 'Canada', 'value': 2 }]
 */

export const chartDataParser = (projects) => {

  const countries = projects.reduce((prevState, { location }) => (
    {
      ...prevState,
      [location]: (prevState[location] || 0) + 1
    }
  ), {});

  const parsedData = Object.keys(countries).map((country) => (
    {
      name: country,
      value: countries[country]
    })
  );

  return parsedData;
}