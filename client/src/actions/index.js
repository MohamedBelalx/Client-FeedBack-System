import axios from 'axios';
import {FETCH_USER} from './types';

export const fetchUser = ()=> async (dispatch) =>{
       const res =  await axios.get('/api/cuser');

        dispatch({
            type:FETCH_USER,
            payload:res.data
        });
        console.log(res.data.name);
        
    }
  
export const handleToken = token => async (dispatch) => {
    const res =  await axios.post('/api/payus',token);
    dispatch({
        type:FETCH_USER,
        payload:res.data
    });

}

