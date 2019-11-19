import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";

class CRUDUsers extends React.Component {

    state = {
       users : []
    }
    
   componentDidMount() {
        console.log("----------"+this.props);
        const token = this.props.jwt;
        axios.get(`http://localhost:8080/users`, {
          headers: {
            Authorization: 'Bearer ' + token
          }})
          .then(res => {
            if (res.status === 200) {
              const users = res.data;
              this.setState({users})
              console.log(users);
             }
          })
      }
      removeTodo() {
      }

    render() {
      const usersCons = this.state.users.map((users, i) => {
        return(
          <div className="col-md-4" key={i}>
            <div className="card mt-4">
             <div className="card-title text-center card-header">
                <h3>User:</h3>
                {users.user}
             </div>
             <div className="card-body">
                <h5>{users.roles.toLowerCase()}</h5>
             </div>
             <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Delete
              </button>
            </div>
            </div>
         </div>
         )
        });
   
        return (
          <div className="container">
             <div className="row mt-8" style={{display: 'flex', justifyContent: 'center'}}>
                 <div className="col-md-10">
                    <div className="row">
                        {usersCons}
                    </div>
                </div>
              </div>
           </div>
        );
        
    }    
    
}

function mapStateToProps(state){
  return{
    jwt: state.jwt
  };
}


export default connect(mapStateToProps)(CRUDUsers);