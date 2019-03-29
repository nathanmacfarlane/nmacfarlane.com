import * as fromProjects from "./projects"
import * as fromBody from "./body"
import { combineReducers } from "redux"

export interface State {
  projects: fromProjects.State
  visibleBody: fromBody.State
}

export const initialState: State = {
  projects: fromProjects.initialState,
  visibleBody: fromBody.initialState
}

export const reducer = combineReducers<State>({
  projects: fromProjects.reducer,
  visibleBody: fromBody.reducer
})

export default reducer
