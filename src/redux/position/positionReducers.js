export const positionListReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case 'POSITION_LIST_REQUEST':
      return {
        loading: true,
        data: state.data,
      }
    case 'POSITION_LIST_SUCCESS':
      return {
        loading: false,
        data: action.payload,
      }
    case 'POSITION_LIST_FAIL':
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}