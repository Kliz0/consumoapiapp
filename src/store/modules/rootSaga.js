import { all } from "redux-saga/effects";
import cartas from "./cartas/saga";

export default function* rootSaga() {
  return yield all([cartas]);
}
