import SignUp from "./components/SignUp";
import "./styles/global.css";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="main">
          <SignUp />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
