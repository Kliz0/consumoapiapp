/* eslint-disable no-restricted-syntax */
import { toast } from "react-toastify";

export function formatError(error) {
  if (error.response) {
    if (error.response.status === 400) {
      if (error.response.data.errors) {
        toast.error("Não foi possivel realizar a operação");
      } else {
        for (const key of Object.keys(error.response.data)) {
          for (const errorMessage of error.response.data[key]) {
            toast.error(errorMessage);
          }
        }
      }
      return error.response.data;
    }
    if (error.response.status === 401) {
      return;
    }
    if (error.response.status === 404) {
      return;
    }
  }

  toast.error("Não foi possivel realizar a operação");
  return ["Internal server error"];
}
