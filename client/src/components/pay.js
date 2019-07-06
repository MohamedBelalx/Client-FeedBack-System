import React,{Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Pay extends Component{
    render(){
        
        return(
            <StripeCheckout
                name='BeMailer'
                description='Pay Us 5$ For 5 Credits'
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
            <button className="btn waves-effect waves-light" type="submit" name="action">
                Add Credits
            </button>

            </StripeCheckout>
        );
    }
}

export default connect(null,actions) (Pay);

