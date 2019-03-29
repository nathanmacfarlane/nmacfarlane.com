import { all, put, call, takeEvery } from "redux-saga/effects"
import Firestore from "../Firestore"
import {
  ActionTypes,
  getProjectsSuccess,
  getTimelineSuccess
} from "../Actions/RootAction"

function* getProjects() {
  const snapshot = yield call(
    Firestore.reduxSagaFirebase.firestore.getCollection,
    "projects"
  )
  let projects: any
  snapshot.forEach((project: any) => {
    projects = {
      ...projects,
      [project.id]: project.data()
    }
  })
  let projectsArr: any[] = []
  for (let key in projects) {
    projectsArr.push(projects[key])
  }

  yield put(getProjectsSuccess(projectsArr))
}
export function* watchGetProjects() {
  yield takeEvery(ActionTypes.GET_PROJECTS, getProjects)
}

function* getTimeline() {
  const snapshot = yield call(
    Firestore.reduxSagaFirebase.firestore.getCollection,
    "timeline"
  )
  let timeline: any
  snapshot.forEach((item: any) => {
    timeline = {
      ...timeline,
      [item.id]: item.data()
    }
  })
  let timelineArr: any[] = []
  for (let key in timeline) {
    timelineArr.push(timeline[key])
  }

  yield put(getTimelineSuccess(timelineArr))
}
export function* watchGetTimeline() {
  yield takeEvery(ActionTypes.GET_TIMELINE, getTimeline)
}

export default function* rootSaga() {
  yield all([watchGetProjects(), watchGetTimeline()])
}
