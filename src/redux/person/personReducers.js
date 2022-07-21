export const personReducer = (state = { data: '' }, action) => {
  switch (action.type) {
    case 'PERSON_REQUEST':
      return {
        loading: true,
        data: state.data
      }
    case 'PERSON_SUCCESS':
      return {
        loading: false,
        data: action.payload,
      }
    case 'PERSON_FAIL':
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}