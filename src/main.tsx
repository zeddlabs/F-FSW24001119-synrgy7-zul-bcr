import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { CarProvider } from "./contexts/carContext.tsx"
import { UserProvider } from "./contexts/userContext.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CarProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </CarProvider>
    </BrowserRouter>
  </React.StrictMode>
)
