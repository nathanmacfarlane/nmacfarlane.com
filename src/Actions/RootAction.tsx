import Project from "../Models/Project"
import TimeLineItem from "../Models/TimeLineItem"

export type RootAction = {}

/* Action Types */
export enum ActionTypes {
  GET_PROJECTS = "GET_PROJECTS",
  GET_PROJECTS_SUCCESS = "GET_PROJECTS_SUCCESS",

  SELECT_PAGE = "SELECT_PAGE",

  GET_TIMELINE = "GET_TIMELINE",
  GET_TIMELINE_SUCCESS = "GET_TIMELINES_SUCCES"
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

export interface GetTimelineAction {
  type: ActionTypes.GET_TIMELINE
  payload: {}
}
export interface GetTimelineSuccessAction {
  type: ActionTypes.GET_TIMELINE_SUCCESS
  payload: { timeline: TimeLineItem[] }
}
export function getTimelines(): GetTimelineAction {
  return {
    type: ActionTypes.GET_TIMELINE,
    payload: {}
  }
}
export function getTimelineSuccess(
  timeline: TimeLineItem[]
): GetTimelineSuccessAction {
  return {
    type: ActionTypes.GET_TIMELINE_SUCCESS,
    payload: { timeline }
  }
}

export interface SelectPageAction {
  type: ActionTypes.SELECT_PAGE
  payload: { page: string }
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
  | GetTimelineAction
  | GetTimelineSuccessAction
