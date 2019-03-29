import Project from "../Models/Project"

export type RootAction = {}

/* Action Types */
export enum ActionTypes {
  GET_PROJECTS = "GET_PROJECTS",
  GET_PROJECTS_SUCCESS = "GET_PROJECTS_SUCCESS",

  SELECT_PAGE = "SELECT_PAGE"
}

/* Action Interfaces */
export interface GetProjectsAction {
  type: ActionTypes.GET_PROJECTS
  payload: {}
}
export interface GetProjectsSuccessAction {
  type: ActionTypes.GET_PROJECTS_SUCCESS
  payload: { projects: Project[] }
}
export interface SelectPageAction {
  type: ActionTypes.SELECT_PAGE
  payload: { page: string }
}

export function getProjects(): GetProjectsAction {
  return {
    type: ActionTypes.GET_PROJECTS,
    payload: {}
  }
}

export function getProjectsSuccess(
  projects: Project[]
): GetProjectsSuccessAction {
  return {
    type: ActionTypes.GET_PROJECTS_SUCCESS,
    payload: { projects }
  }
}

export function selectPage(page: string): SelectPageAction {
  return {
    type: ActionTypes.SELECT_PAGE,
    payload: { page }
  }
}

/* Action Type */
export type Action =
  | GetProjectsAction
  | GetProjectsSuccessAction
  | SelectPageAction
