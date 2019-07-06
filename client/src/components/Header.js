import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Pay from './pay'
import './style.css'
class Header extends Component{

    renderContent(){
      
      switch(this.props.auth){
        case null:
          return 'No Action';
        case false:
          return <li><a href="/auth/google">LogIn With Google</a></li>;
        default:
          return(
            [
              <li key='1'><Pay/></li>,
              <li key='2' style={{margin:'0 10px'}}>{this.props.auth.name}</li>,
              <li key='3' style={{margin:'0 10px'}}>Credits: {this.props.auth.credits}</li>,
              <li key='4'><a href="/api/logout">LogOut</a></li>
            ]
          );
      }
    }
    render(){
      console.log(this.props.auth)
        return(
            <nav className='nav-warpper blue darken-1'>
              <div className="container">
                <Link to={this.props.auth ? '/surveys':'/'} className="brand-logo">BeMailer
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  
                  
                    {this.renderContent()}
                  
                </ul>
              </div>
            </nav>
        );
    }
}

function mapStateToProps({auth}){
  return {auth}
}

export default connect(mapStateToProps) (Header);