import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./components/List.tsx";
import HolaReact from "./components/HolaReact.tsx";
import Ods from "./components/Ods.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HolaReact /> */}
    <Ods />
    {/* <List /> */}
  </StrictMode>,
);
