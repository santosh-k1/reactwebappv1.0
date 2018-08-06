import React, { Component } from 'react';
import Spinner from 'react-spinkit';
class Loader extends React.Component { 
    constructor() {
      super();
      this.state = {
        isVisible: true,
      };
    }
   
    render( ) {
      return (
      <div>
        { !this.state.isVisible ? (
           <div className="loader-wrapper">
           <Spinner name="line-scale" color="steelblue" className="loader" />
           </div>
        ) : null }
        <button className="btn btn-default" onClick={() => this.setState({
          isVisible: !this.state.isVisible
        })}>Search</button>
      </div>
      
      );
  }
}
  export default Loader;
  