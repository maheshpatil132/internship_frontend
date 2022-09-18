import axios from 'axios'

export const loginbuyeraction = (email , password) => async(dispatch)=>{
   try {
    
    dispatch({type: 'UserReq' })

    const config = { headers : { "Content-Type" : "application/json"} }

    const {data} = await axios.post('/login/buyer',{email ,password , config})

    dispatch({
        type:'LoginSuccess',
        payload : data.user
    })

   } catch (error) {
      dispatch({
        type:'LoginFail',
        payload:error.response.data.error
      })

   }
}


export const loginselleraction = (email , password) => async(dispatch)=>{
   try {
    
    dispatch({type: 'UserReq' })

    const config = { headers : { "Content-Type" : "application/json"} }

    const {data} = await axios.post('/login/seller',{email ,password , config})

    dispatch({
        type:'LoginSuccess',
        payload : data.user
    })

   } catch (error) {
      dispatch({
        type:'LoginFail',
        payload:error.response.data.error
      })

   }
}


export const clearerror =async (dispatch)=>{
 dispatch({
    type:'ClearError'
 })
}