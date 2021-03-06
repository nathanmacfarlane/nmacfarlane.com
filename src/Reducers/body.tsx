import { Action, ActionTypes } from "../Actions/RootAction"
import { pages } from "../Sidebar"

/* State Definition */
export interface State {
  selectedPage: string
}

/* Initial State */
export const initialState: State = {
  selectedPage: pages[0].url
}

/* Reducer */
export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.SELECT_PAGE:
      return { ...state, selectedPage: action.payload.page }
    default:
      return state
  }
}
