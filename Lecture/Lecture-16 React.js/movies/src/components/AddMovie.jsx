import React, { Component } from 'react';
import axios from 'axios'

class AddMovie extends Component {
    state = { 
        
     data:{ 
            title: "",
            genreId: "",
            numberInStock: "",
            dailyRentalRate: ""
          }
     }

    handleChange=e=>{
      
        const input=e.currentTarget;
        const data={...this.state.data};
        data[input.name]=input.value;
        this.setState({data});
    }

    saveMovie=(e)=>{
        e.preventDefault();
        axios.post("/saveMovie",this.state.data).then(res=>{
            console.log("Data Submitted");
            this.props.history.push("/Movies");
        })
    }
    render() { 
        return (
            <form onSubmit={this.saveMovie}>
            
            <div class="form-group col-3">
              <label for="exampleFormExamplesInput1">Title</label>
              <input type="text" class="form-control" id="formgroupmexampleInput1" placeholder="Enter Title" name="title" required onChange={this.handleChange}></input>
            </div>
            <div class="form-group col-3">
              <label for="exampleFormControlSelect1">Genre</label>
              <select class="form-control" id="exampleFormControlSelect1" name="genreId" onChange={this.handleChange}>
                <option value="5b21ca3eeb7f6fbccd471818">Action</option>
                <option value="5b21ca3eeb7f6fbccd471814">Comedy</option>
                <option value="5b21ca3eeb7f6fbccd471820">Thriller</option>
              </select>
            </div>
            <div class="form-group col-3">
              <label for="exampleFormControlSelect2">Number in Stock</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" name="numberInStock" placeholder="" required onChange={this.handleChange}></input>
            </div>
            <div class="form-group col-3">
              <label for="exampleFormControlTextarea1">Rate</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" name="dailyRentalRate" placeholder="" required onChange={this.handleChange}></input>
            </div>
            <div class="form-group col-2">
              <button type="submit" class="btn btn-primary">Save</button>
            </div>
          </form>
         );
    }
}
 
export default AddMovie;