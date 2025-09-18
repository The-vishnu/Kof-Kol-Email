import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Sidebar from "./components/Sidebar";
import ChatSection from "./components/ChatSection";
import "./App.css";
import { ThemeContext } from "./context/ThemContext";

function App() {

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }
  return (
    <>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <div className={`flex flex-row w-full h-screen ${theme === "light" ? "bg-gray-300 " : "bg-gray-700"}`}>
        <Sidebar />
        <ChatSection />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
