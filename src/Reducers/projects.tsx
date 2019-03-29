import { Action, ActionTypes } from "../Actions/RootAction"
import Project from "../Models/Project"

/* State Definition */
export interface State {
  projects: Project[]
}

/* Initial State */
export const initialState: State = {
  projects: []
}

/* Reducer */
export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.GET_PROJECTS_SUCCESS: {
      return { ...state, projects: action.payload.projects }
    }
    default:
      return state
  }
}
