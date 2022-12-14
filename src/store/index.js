import createSagaMiddleware from "redux-saga";

import CreateStore from "./createStore";
import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = CreateStore(rootReducer, middlewares);

sagaMiddleware.run(rootSaga);

export default store;
