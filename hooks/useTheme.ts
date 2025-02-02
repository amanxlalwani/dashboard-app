"use client";

import { useEffect, useState } from "react";

export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("darkMode")=="1"){
    document.documentElement.classList.add("dark");
    }
    const isDarkMode = document.documentElement.classList.contains("dark") ;
    setIsDark(isDarkMode);
  }, []);

  useEffect(()=>{
    localStorage.setItem("darkMode",isDark?"1":"0");
  },[isDark])
  return { isDark , setIsDark };
}