import React from 'react'
import axios from 'axios';
import updateJwt from '../redux/action';
import { connect } from "react-redux";

class Home extends React.Component {
  
  state = {
    'username': '',
    'password': ''
  }

  authenticate = () => {
       axios.post(`http://localhost:8080/jwts/authenticate`, this.state)
          .then(res => {
            if (res.status === 200) {
              const jwt = res.data.jwt;
              updateJwt(jwt);
              this.props.history.push("/CRUDUsers");
              
            }
          })
      }

  onSubmit = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
        this.authenticate();
     }
  handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
   };
    
    render() {
        return(
        <div>
          <form className="home-hero-signup text-gray-dark js-signup-form" onSubmit={this.onSubmit}>
            <label className="form-label h5" >Username</label>
            <input type="text" name="username" id="username"  onChange={this.handleChange} value={this.state.username}
            className="form-control form-control-lg input-block"/>
            <label className="form-label h5" >Email</label>
            <input type="text" name="email" id="user[email]" 
            className="form-control form-control-lg input-block js-email-notice-trigger"/>
            <label className="form-label h5" >Password</label>
            <input type="password" name="password" id="password" onChange={this.handleChange} value={this.state.password} className="form-control form-control-lg input-block"/>
            <p className="form-control-note text-gray-dark"/>
            <input type="hidden" name="source" className="js-signup-source" value="form-home"/>
            <input type="text" name="required_field_bbd6" id="required_field_bbd6" className="form-control" hidden="hidden"/>
            <input type="hidden" name="timestamp" value="1572036773268" className="form-control"/>
            <input type="hidden" name="timestamp_secret" value="25f4f3f2e41ea67a948408d1242115caf0c28340e37436a2cb93324a584dec9a" className="form-control"/>
            <button  className="btn-mktg btn-primary-mktg btn-large-mktg f4 btn-block my-3" type="submit">Sign up for MySPA</button>
         </form>
       </div>        
       )
    }
}
export default connect(null, { updateJwt })(Home)