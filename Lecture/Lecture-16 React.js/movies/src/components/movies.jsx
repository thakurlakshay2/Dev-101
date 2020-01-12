import React, { Component } from 'react';
// import {getMovies} from '../services/movies.js';
// import {getGenres} from '../services/genres';
import axios from 'axios'
import {Link} from "react-router-dom"
class Movies extends Component {
    state = {  
        movies:[],
        currentPage:1,
        getGenresname:"All Genres",
        search:"",
        genreList:[{_id:1,name:"All Genres"}]
    }

    toggleLike=(data)=>{
      const cpyState=this.state.movies;
      for(let x=0; x<cpyState.length;x++){
        if(data._id===cpyState[x]._id){
          cpyState[x].liked=!cpyState[x].liked;
        }
      }

      this.setState({
        movies:cpyState
      })
      
    }

    Delete=(data)=>{
      const cpyState=[];
      for(let x=0; x<this.state.movies.length;x++){
        if(data._id!==this.state.movies[x]._id){
          cpyState.push(this.state.movies[x]);
        }
      }

      this.setState({
        movies:cpyState
      })
    }

    changePage=(e)=>{this.setState({currentPage:e})}
    changeGenre=(e)=>{this.setState({currentPage:1,getGenresname:e})}
    Searching=(data)=>{this.setState({search:data})  }
   
  showPage=()=>{
      let bound=this.state.currentPage;
      let list=this.selectiveList();
      return list.slice((bound-1)*4,bound*4);
      
    }                                                                                                                                                               

  selectiveList=()=>{
      var g=this.state.getGenresname;
      let mlist=[];
      if(this.state.search===""){
        if(g==="All Genres"){
          mlist=this.state.movies;
        }
        else{
        for(let i=0;i<this.state.movies.length;i++){
          if(g===this.state.movies[i].genre.name){
              mlist.push(this.state.movies[i]);
          }
        }
        
        }
      }
      else{
        let find=this.state.search.toLowerCase();
        
        if(g==="All Genres"){
          for(let i=0;i<this.state.movies.length;i++){
            let str=this.state.movies[i].title.toLowerCase();
            if(str.search(find)>=0){
                mlist.push(this.state.movies[i]);
            }
          }
        }
        else{
        for(let i=0;i<this.state.movies.length;i++){
          let str=this.state.movies[i].title;
          if(g===this.state.movies[i].genre.name && str.search(find)>=0){
              mlist.push(this.state.movies[i]);
          }
        }
        
        }
      }
      
    return mlist;   
  }
  componentDidMount(){
    // setTimeout(()=>{
    //     this.setState({genreList:[...this.state.genreList,...getGenres()]})
    // },3000)
    axios.get("/movies").then(response=>{
      console.log(response.data+"12345");
      this.setState({movies:response.data.movies})
    })
    axios.get("/genres").then(response=>{
      console.log(response.data+"1212");
      this.setState({genreList:[...this.state.genreList,...response.data.genres]})
    })
  }
  
    render() { 
      
        return (
          <React.Fragment>
          <div className="row">
            <div className="col-2">
              <ul class="list-group">
                 {/* <li class="list-group-item active" onClick={()=>{this.changeGenre("")}}>All Genre</li> */}
                {
                  this.state.genreList.map((el)=>{
                    // console.log(el.length);
                      console.log(el.name);
                  return  <li class="list-group-item" onClick={()=>{this.changeGenre(el.name)}}>{el.name}</li>
                  })
                }
              </ul>
            </div>
            
            <div className="col-8">
            <div><button type="button" class="btn  col-2">
            <Link to="/Movies/add">Add Movie</Link>
            </button></div>
            <input type="text" name="Search" onChange={(e)=>{this.Searching(e.currentTarget.value)}}></input>
            <table class="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
              </tr>
            </thead>
            <tbody>
               {   
                   this.showPage().map((El)=>{
                       
                   return(<tr>
                            <td>{El.title}</td>
                            <td>{El.genre.name}</td>
                            <td>{El.numberInStock}</td>
                            <td>{El.dailyRentalRate}</td>
                            <td onClick={()=>{this.toggleLike(El)}}>{(
                              ()=>{
                              if(El.liked){
                                return  <i class="fa fa-heart" aria-hidden="true" ></i>;
                              }
                              else{
                                return <i class="far fa-heart"></i>;
                              }
                            }
                            )()}</td>
                            <td onClick={()=>{this.Delete(El)}}><i class="fa fa-trash-o" aria-hidden="true"></i></td>
                            
                        </tr>)
                   })
               } 
              
               
            </tbody>
          </table>
            
            <nav aria-label="Page navigation example">
          <ul class="pagination">
          {/* <li class="page-item"><a class="page-link" href="#">Previous</a></li> */}
            {/* page numbers */}
            {(()=>{
                const list=[];
                for(let y=0;y<Math.ceil(this.selectiveList().length/4);y++){
                  
                 list.push(<li class="page-item" onClick={()=>{this.changePage(y+1)}}><a class="page-link" href="#">{y+1}</a></li>);
                }
                return list;
              })()
            }
          {/* <li class="page-item"><a class="page-link" href="#">Next</a></li> */}
          </ul>
          </nav>
            </div>
            
            
          </div>
        </React.Fragment>
            );
    }
}
 
export default Movies;