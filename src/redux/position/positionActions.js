import axios from "axios"

export const listPositions = () => async (dispatch) => {
    try {
        dispatch({ type: 'POSITION_LIST_REQUEST' })
    
        const { data } = await axios.get(`people/positions`)

        dispatch({
            type: 'POSITION_LIST_SUCCESS',
            payload: data.data,
        })
    } catch (error) {
        dispatch({
            type: 'POSITION_LIST_FAIL',
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}