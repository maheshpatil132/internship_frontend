import axios from 'axios'

export const loginbuyeraction = (email , password) => async(dispatch)=>{
   try {
    
    dispatch({type: 'UserReq' })

    const config = { headers : { "Content-Type" : "application/json"} }

    const {data} = await axios.post('https://maqure.43.205.71.30.nip.io/login/buyer',{email ,password , config})

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

export const loginadminaction = (email , password) => async(dispatch)=>{
   try {
    
    dispatch({type: 'UserReq' })

    const config = { headers : { "Content-Type" : "application/json"} }

    const {data} = await axios.post('https://maqure.43.205.71.30.nip.io/login/admin',{email ,password , config})

    console.log(data)

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

    const {data} = await axios.post('https://maqure.43.205.71.30.nip.io/login/seller',{email ,password , config})

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


export const autologin = () => async(dispatch)=>{
   try {
    
    dispatch({type: 'UserReq' })


    const {data} = await axios.get('https://maqure.43.205.71.30.nip.io/auto/login')
    console.log(data);

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