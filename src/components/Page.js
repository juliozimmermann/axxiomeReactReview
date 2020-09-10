import React, { Component } from 'react';

class Page extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    title: 'Initial Title'
  }

  componentDidMount() {
    //initializaton
    //load your data
  }

  // componentWillUpdate(prevState, prepProps) {
  shouldComponentUpdate(nextProps, nextState) {
    //add conditions to avoid unnecessary renders
    if (nextProps.propX !== this.props.propX) {
      return false;
    }
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {
    // logout the user
  }

  render() {
    return <div>
      <span>Page</span>
    </div>
  }
}

function PageNotState() {

}

export default Page;