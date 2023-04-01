import React from "react";
import ReactDOM from "react-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import App from "./App";
import Layout from "./components/Layout";
import NoMatch from "./components/NoMatch";

const publishableKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

ReactDOM.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={publishableKey}>
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
