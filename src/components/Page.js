import React, { Component } from 'react';

class Page extends Component {

  constructor(props) {
    super(props);
    //do not call setState insice here
  }

  static propTypes = {
    title: PropTypes.string.isRequired
  }

  static defaultProps = {
    title: 'Page'
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
    //try 
    //add conditions to avoid unnecessary renders
    if (nextProps.propX !== this.props.propX) {
      return false;
    }
  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {
    // event dispose of react components
    // don't call setState here
    // logout the user
  }

  componentDidCatch(error, info) {
    
  }

  render() {
    return <div>
      <span>Page</span>
    </div>
  }
}

export default Page;