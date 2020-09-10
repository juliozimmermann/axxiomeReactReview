import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { PieChart, Pie, Tooltip, Legend } from "recharts";

import { setFilter } from '../data/actions/filter';
import { loadProjects } from '../data/actions/projects';
import { uniqueContries, chartDataParser } from '../data/selectors/projects';

import { fetchProjects } from '../services/ProjectsService';


function Dashboard() {

  const dispatch = useDispatch();

  const { 
    loaded, 
    projects, 
    filter, 
    filterOptions, 
    chartData 
  } = useSelector(({ projects: { loaded, data }, filter }) => ({ 
    loaded,
    projects: data,
    filter,
    filterOptions: uniqueContries(data),
    chartData: chartDataParser(data)
  }));

  useEffect(() => {
    if (!loaded) fetchProjects().then(({ data }) => dispatch(loadProjects(data)));
  }, []);
  
  const handleFilterChange = ({ target: { value } }) => dispatch(setFilter(value));

  return <>
    <h1>Dashboard</h1>
    <label>Filter</label><br />
    <select onChange={handleFilterChange}>
      {
        filterOptions.map(country => <option key={country}>{country}</option>)
      }
    </select>
    <br />
    {
       projects.map(({ id, projectName, location }) => (location === filter || filter === 'ALL') && <div key={id}><span>{projectName}</span><br /></div>)
    }
    <PieChart width={400} height={400}>
      <Pie data={chartData} nameKey="name" dataKey="value" fill="#8884d8" label />
      <Tooltip />
      <Legend />
    </PieChart>
  </>;
}

/* const mapStateToProps = ({ projects: { loaded, data }, filter }) => ({ 
  loaded,
  projects: data,
  filter,
  filterOptions: uniqueContries(data),
  chartData: chartDataParser(data)
}); */

/* const mapDispatchToProps = (dispatch) => ({
  dispachSetFilter: (filter) => dispatch(setFilter(filter))
}); */

export default  Dashboard; //connect(mapStateToProps)(Dashboard);