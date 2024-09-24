import "@theme-toggles/react/css/Simple.css";
import { Simple } from "@theme-toggles/react";
import { useState, useEffect } from "react";

function Header() {
  const [isToggled, setToggle] = useState();

  useEffect(() => {
    localStorage.theme === "dark" ? setToggle(false) : setToggle(true);
  }, []);

  const darkModeHandler = () => {
    document.documentElement.classList.toggle("dark");
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  };

  return (
    <div className="bg-white dark:bg-slate-700 dark:text-slate-100 transition-colors">
      <div className="flex justify-between items-center container m-auto p-4 flex-wrap gap-2">
        <h1 className="text-2xl font-bold">🌍 Countries</h1>
        <Simple
          duration={750}
          onToggle={darkModeHandler}
          toggled={isToggled}
          toggle={setToggle}
        />
      </div>
    </div>
  );
}

export default Header;
