import * as fromProjects from "./projects"
import * as fromBody from "./body"
import * as fromExperience from "./experience"
import { combineReducers } from "redux"

export interface State {
  projects: fromProjects.State
  ui: fromBody.State
  experience: fromExperience.State
}

export const initialState: State = {
  projects: fromProjects.initialState,
  ui: fromBody.initialState,
  experience: fromExperience.initialState
}

export const reducer = combineReducers<State>({
  projects: fromProjects.reducer,
  ui: fromBody.reducer,
  experience: fromExperience.reducer
})

export default reducer
