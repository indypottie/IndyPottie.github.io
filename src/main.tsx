import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Fonts
// @ts-ignore
import "@fontsource/inter";
// @ts-ignore
import "@fontsource/space-grotesk";

// Styles
import "../styles/globals.css";
import "../styles/background.css";
import "../styles/theme.css";

import App from "./App";

createRoot(document.getElementById("root")!).render(

    <StrictMode>

        <App />

    </StrictMode>

);