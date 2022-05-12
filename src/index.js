import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/Authentication/LoginContext";
import { LikeProvider } from "./Context/LikeContext";
import { PlayListProvider } from "./Context/PlayListContext";
import { WatchLaterProvider } from "./Context/WatchLaterContext";
import { HistoryProvider } from "./Context/HistryContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PlayListProvider>
          <WatchLaterProvider>
            <LikeProvider>
              <HistoryProvider>
                <App />
              </HistoryProvider>
            </LikeProvider>
          </WatchLaterProvider>
        </PlayListProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
