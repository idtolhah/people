import { configureStore } from '@reduxjs/toolkit'
import { peopleSearchReducer } from './redux/people/peopleReducers'
import { positionListReducer } from './redux/position/positionReducers'

export default configureStore({
  reducer: {
    positionList: positionListReducer,
    peopleSearch: peopleSearchReducer,
  },
})