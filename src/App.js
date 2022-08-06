import React from "react";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

import "./config/ReactotronConfig.js";

import Routes from "./config/routes/index";

import store from "./store";

import "./_styles/global";

import { theme } from "./_styles/theme";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS theme={theme}>
        <Routes />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
