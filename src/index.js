import React from "react";
import ReactDOM from "react-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import App from "./App";
import Layout from "./components/Layout";
import NoMatch from "./components/NoMatch";

const frontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

ReactDOM.render(
  <React.StrictMode>
    <ClerkProvider frontendApi={frontendApi}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
