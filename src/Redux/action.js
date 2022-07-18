import *  as types from './actionTypes'
import axios from "axios";


export const getCountry = (params) => (dispatch) => {
  dispatch({ type:types.GET_COUNTRIES_REQUEST});
  return axios
    .get(`http://localhost:8080/countries`, params)
    .then((r) => dispatch({ type: types.GET_COUNTRIES_SUCCESS,  payload: r.data }))
    .catch((err) => dispatch({ type: types.GET_COUNTRIES_FAILURE, payload:err }));
};


export const updateRequest = () => ({ type: types.UPDATE_COUNTRY_REQUEST });

export const updateSuccess = (payload) => ({
type: types.UPDATE_COUNTRY_SUCCESS,
payload,
});


export const updateError = (payload) => ({
type: types.UPDATE_COUNTRY_FAILURE,
payload,
});
export const UpdatedAPI = (params) => (dispatch) => {
  dispatch(updateRequest());
  axios
    .patch(`http://localhost:8080/countries/${params.id}`, {
      city: params.city,
      population: params.population,
  
    })
    .then((r) => console.log(r.data,"delete"))
    .catch((err) => dispatch(updateError (err)));
  };


export const deletePostRequest=(payload)=>{
return{
    type:types.DELETE_COUNTRY_REQUEST,
    payload
}
}

export const deletePostSuccess=(payload)=>{
return{
    type:types.DELETE_COUNTRY_SUCCESS,
    payload
}
}


export const deletePostFailure=(payload)=>{
return{
    type:types.DELETE_COUNTRY_FAILURE,
    payload
}
}

export const deleteCountry=(payload)=>(dispatch)=>{
dispatch(deletePostRequest());
axios.delete(`http://localhost:8080/country/${payload}`,payload)
.then(r=>deletePostSuccess(r.data))
.then((data)=>
console.log(data,"data"))
.catch(e=>deletePostFailure(e.data))
}


export const deletePost = (id)=>{
return {
    type :types.DELETE_COUNTRY_SUCCESS ,
    payload : id
}
};

export const upatedPost = (payload)=>{
return {
    type : types.UPDATE_COUNTRY_SUCCESS,
    payload
}
};