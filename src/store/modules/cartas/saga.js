import { all, call, put, takeLeading } from "redux-saga/effects";

import { formatError } from "../../../utils/errorHelper";
import axios from "axios";

import {
  getCartasRequest,
  getCartasSuccess,
  getCartasFail,
} from "./actions/getCartas";
import {
  addCartaFail,
  addCartaRequest,
  addCartaSuccess,
} from "./actions/addCarta";

function* obterCartas({ payload }) {
  try {
    const response = yield call(
      axios.get,
      `https://picsum.photos/v2/list?page=${payload}&limit=5`
    );
    const { data } = response;
    yield put(getCartasSuccess(data));
  } catch (error) {
    yield put(getCartasFail(formatError(error)));
  }
}

function* adicionarCarta({ payload }) {
  try {
    const response = yield call(
      axios.get,
      `https://picsum.photos/v2/list?page=${payload}&limit=3`
    );
    const { data } = response;
    yield put(addCartaSuccess(data));
  } catch (error) {
    yield put(addCartaFail(formatError(error)));
  }
}

export default all([
  takeLeading(getCartasRequest.type, obterCartas),
  takeLeading(addCartaRequest.type, adicionarCarta),
]);
