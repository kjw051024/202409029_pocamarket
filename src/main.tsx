import { createRoot } from "react-dom/client";
import { LoginScreen } from "./screens/LoginScreen";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(<LoginScreen />);
