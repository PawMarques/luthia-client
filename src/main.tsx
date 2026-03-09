import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./components/theme-provider";
import "./index.css";

// App placeholder — will be replaced with AppLayout + Router in later tasks
function App() {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <p className="m-auto text-text-muted">Luthia shell</p>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);