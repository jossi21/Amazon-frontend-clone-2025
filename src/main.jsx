import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { DataPovider } from "./Components/DataProvider/DataPovider.jsx";
import { initialState, reducer } from "./Utility/reducer.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataPovider reducer={reducer} initialState={initialState}>
      <App />
    </DataPovider>
  </StrictMode>
);
