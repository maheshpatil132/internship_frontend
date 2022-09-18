import axios from 'axios'


export const getallproduct = async (dispatch)=>{
    try {
        dispatch({type:'Prod_Req'})

    const {data} = await axios.get('/products')
     
    await dispatch({
        type:'AllProduct_Success',
        payload : data.products
    })
    } catch (error) {
        dispatch({
            type:'AllProduct_Fail',
            error:error.response.data.message
        })
    }
    
}