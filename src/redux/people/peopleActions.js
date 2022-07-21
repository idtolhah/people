import axios from "axios"

export const searchPeople = (position = '', sortby = '', sortdirection = '', name = '') => async (dispatch) => {
    try {
        dispatch({ type: 'PEOPLE_SEARCH_REQUEST' })
    
        const { data } = await axios.get(`people?position=${position}&sortby=${sortby}&sortdirection=${sortdirection}&name=${name}`)

        dispatch({
            type: 'PEOPLE_SEARCH_SUCCESS',
            payload: data.data,
        })
    } catch (error) {
        dispatch({
            type: 'PEOPLE_SEARCH_FAIL',
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}