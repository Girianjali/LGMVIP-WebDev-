import React from 'react';
import Users from "./Card";
import {Navlink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import './index.css';
import NavbarComp from './component/NavbarComp';


class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = { users_data:[],loading:true
         
      }
      this.state={
        data:'Intitial data....'
      }
      this.updateState = this.updateState.bind(this);
   };
   
   updateState() {
      this.setState({data: 'Data updated...'})
      const link="https://reqres.in/api/users?page=1";
      fetch(link)
      .then((user)=>{
        this(response=> response.json())
        .then((users)=>{
          this.setState({users_data: users.data,loading:false})
          console.log(users.data);
        })
        .catch((error)=>{
          console.error(error)
        })
      }
      )
   }
   render() {
      return (
          <div className="code">
           <NavbarComp/>


           <h1>LETSGROW MORE TASK 2.......</h1>
            <button onClick = {this.updateState}>GET USERS</button>
            <h4>{this.state.data}</h4>
         </div>
      );
   }
}
export default App;