import React, { Component } from 'react';
import ModalBox from '../Component/modalBox';
import Select from 'react-select';
import ReactDataGrid from 'react-data-grid';
import TableGrid from '../Component/tableGrid';
import Loader from '../Component/commonCompo';
//import ReactDataGridPlugins from 'react-data-grid/addons';

  
const scaryAnimals = [
  { label: "Alligators", value: 1 },
  { label: "Crocodiles", value: 2 },
  { label: "Sharks", value: 3 },
  { label: "Small crocodiles", value: 4 },
  { label: "Smallest crocodiles", value: 5 },
  { label: "Snakes", value: 6 },
];

class Home extends React.Component { 
 
  state = {
    inputValue: '',
  }
  onInputChange = (inputValue, { action }) => {
    console.log(inputValue, action);
    switch (action) {
      case 'input-change':
        this.setState({ inputValue });
        return;
      case 'menu-close':
        console.log(this.state.inputValue);
        let menuIsOpen = undefined;
        if (this.state.inputValue) {
          menuIsOpen = true;
        }
        this.setState({
          menuIsOpen
        });
        return;
      default:
        return;
    }
  }
  render(  
  ) {
    return (
      <div className="dashboard-wrapper">
        <ol class="breadcrumb">
          <li><a href="#">Home</a></li>
          <li class="active"><a href="#">dashboard</a></li>
        </ol>
        <div className="container-fluid  search-section">
        <div className="row">
        <div className="col-md-6">
        <label>ProjectName</label>
        <input className="form-control" />
        </div>
        <div className="col-md-6">
        <label>Company</label>
        <Select options={scaryAnimals} defaultValue={scaryAnimals[0]} isClearable isSearchable isOptionDisabled={(option) => option.scaryAnimals !== 'Snakes'} />
        </div>
        </div>
        <div className="row">
        <div className="col-md-6">
        <label>ProjectName</label>
        <Select name="form-field-name" options={[{value: '1', label: 'one'},{value: '2', label: 'two'}]} />
        </div>
        <div className="col-md-6">
        <label>ProjectName</label>
        <Select options={scaryAnimals}  onInputChange={this.onInputChange} isMulti />
        
        </div>
        </div>
       

        <div className="grid-wrapper" style={{marginTop:'20px'}}>
       <TableGrid/>
        </div>
        <div className="row ">
        <div className="button-wrapper text-center" style={{marginTop:'50px'}}>
        <Loader/>
        </div>
        </div>
        </div>
        <ModalBox showheader={"hi"} showContent={"abc"} />
        {/* <ModalBox showheader={"hi"} showContent={"abc"} /> */}

      </div>
    );

  }

}
export default Home;
