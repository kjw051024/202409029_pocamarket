import { createRoot } from "react-dom/client";
import { Button } from "./components/Button/Button";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <Button label="버튼" type="Main" size="Large" />,
);
