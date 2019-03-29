import { Action, ActionTypes } from "../Actions/RootAction"
import TimeLineItem from "../Models/TimeLineItem"

/* State Definition */
export interface State {
  timeline: TimeLineItem[]
}

/* Initial State */
export const initialState: State = {
  timeline: []
}

/* Reducer */
export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.GET_TIMELINE_SUCCESS: {
      return { ...state, timeline: action.payload.timeline }
    }
    default:
      return state
  }
}
