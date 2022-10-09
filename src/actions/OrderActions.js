import axios from "axios"


export const getallorders =async (dispatch)=>{
    try {
        dispatch({type:'Bids_Req'})

        const {data} = await axios.get('/getall/orders')
        

        dispatch({
            type:'Get_Bid_Success',
            payload:data.orders
        })
    } catch (error) {
        dispatch({
            type:'Get_Bid_Fail',
            payload:error.response.data.message
        })
    }
}


export const clearerror =async (dispatch)=>{
    dispatch({
       type:'ClearError'
    })
   }