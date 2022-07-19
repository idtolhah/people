export const peopleSearchReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case 'PEOPLE_SEARCH_REQUEST':
      return {
        loading: true,
        data: state.data
      }
    case 'PEOPLE_SEARCH_SUCCESS':
      return {
        loading: false,
        data: action.payload,
      }
    case 'PEOPLE_SEARCH_FAIL':
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}