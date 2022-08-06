import React from "react";

import { Router as BrowserRouter, Routes, Route } from "react-router-dom";
import { createMemoryHistory } from "history";

import "../../_styles/global";

import Home from "../../pages/Home/index";
import { Layout } from "../../layout";

export default function RouteWrapper() {
  const history = createMemoryHistory();
  return (
    <BrowserRouter location={history.location} navigator={history}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
