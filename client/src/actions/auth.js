import axios  from 'axios';
import {setAlert} from './alert';
import {
 REGISTER_SUCCUSS,
 REGISTER_FAIL,
 USER_LOADED,
 AUTH_ERROR
}  from './types';
import setAuthToken  from '../utils/setAuthToken';

//load user 

export const loadUser= ()=> async dispatch=>{
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }
    try{
         //console.log('zzz'); return true;
         const res =await axios.get('http://localhost:5000/api/auth/test');
         dispatch({
             type:USER_LOADED,
             payload:res.data
         })

    }catch(err){

        dispatch({
            type:AUTH_ERROR
            
        })
    }
}



//register user

export const register =({name,email,password})=>async dispatch=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body=JSON.stringify({name,email,password});
    var  res='';
    try{
      res =await axios.post('http://localhost:5000/api/users/register',body,config);
            
      dispatch(setAlert('user created','primary'));
      dispatch({
               type:REGISTER_SUCCUSS,
               payload:res.data 
            })

    }catch(err){

         const errors=err.response.data.errors;
         if(errors){
                errors.forEach(error => dispatch(setAlert(error.msg,'danger')));
         }
        dispatch({
            type:REGISTER_FAIL,
            payload:res.data 
         })

    }
}