import { logger } from "redux-logger"
import { createStore, applyMiddleware, compose } from "redux"
import { reducer, State } from "../Reducers"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import rootSaga from "../Sagas/index"

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore<State, any, any, any>(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
)

sagaMiddleware.run(rootSaga)

export default store
