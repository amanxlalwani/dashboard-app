"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import { Sun ,Moon,Bell} from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { useTheme } from "@/hooks/useTheme";

import ReactDOM from "react-dom/client";

import { theme } from "@/providers/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const {setIsDark ,isDark} = useTheme();

  

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <html lang="en">
      <body className={`${inter.className} transition-colors bg-[#fff] duration-200`}>
      <Sidebar isDark={isDark} />
      <div className="min-h-screen transition-colors duration-200 dark:bg-black">

      <div className="lg:ml-64 ">
   
        <div className="mb-2 flex border-b h-20 p-4 border-gray-200 dark:border-gray-800 items-center justify-end">
   
          <div className="flex items-center gap-4">
            <button className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-900">
              <Bell className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
            <button
              onClick={toggleDarkMode}
              className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-900"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-gray-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
        </div>
        <theme.Provider value={isDark}>
        {children}
        </theme.Provider>
      </div>
    </div>
   
      </body>
    </html>
  );
}