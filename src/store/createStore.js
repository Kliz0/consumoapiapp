import { configureStore } from "@reduxjs/toolkit";
import { compose } from "redux";

const CreateStore = (reducers, middlewares) => {
  return configureStore({
    middleware: [...middlewares],
    enhancers:
      process.env.NODE_ENV === "development"
        ? [compose(console.tron.createEnhancer())]
        : [],
    reducer: reducers,
  });
};

export default CreateStore;
