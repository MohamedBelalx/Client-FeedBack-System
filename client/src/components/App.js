import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';

const Dashbord = ()=> <h1>Dashbord</h1>

const SurveyNew = ()=> <h1>SurveyList</h1>

class App extends Component{
    componentDidMount(){
        this.props.fetchUser();
    }
    
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path='/' component={Landing} />
                        <Route exact path='/surveys' component={Dashbord} />
                        <Route path='/surveys/new' component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}


export default connect(null,actions)(App);