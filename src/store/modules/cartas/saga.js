import { all, call, put, takeLeading } from "redux-saga/effects";

import { formatError } from "../../../utils/errorHelper";
import api from "../../../config/api";

import {
  getCartasRequest,
  getCartasSuccess,
  getCartasFail,
} from "./actions/getCartas";

function* getCartas() {
  try {
    const response = yield call(api.get, `v1/fiscais`);
    const { data } = response;
    yield put(getCartasSuccess(data));
  } catch (error) {
    yield put(getCartasFail(formatError(error)));
  }
}

export default all([takeLeading(getCartasRequest.type, getCartas)]);
