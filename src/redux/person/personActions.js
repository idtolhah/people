import axios from "axios"

export const getPerson = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'PERSON_REQUEST' })
    
        const { data } = await axios.get(`people/${id}`)

        dispatch({
            type: 'PERSON_SUCCESS',
            payload: data.data,
        })
    } catch (error) {
        dispatch({
            type: 'PERSON_FAIL',
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}