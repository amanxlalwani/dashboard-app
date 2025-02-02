"use client";
import {usePathname} from "next/navigation"
import { useState, useEffect} from "react";
import { LayoutDashboard, LineChart, Settings, Menu,CircleUser , X} from "lucide-react";
import Link from "next/link";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: LineChart, label: "Analytics", path: "/analytics" },
  { icon: Settings, label: "Settings", path: "/settings" },
  { icon: CircleUser, label: "Profile", path: "/profile" },
];

export default function Sidebar({isDark}:{isDark:boolean}) {
 
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname=usePathname(); 
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
    
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-4 ${isOpen?"left-52":"left-4"} z-50 lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800`}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-gray-600 dark:text-gray-400" />
        ) : (
          <Menu className="h-6 w-6 text-gray-600 dark:text-gray-400" />
        )}
      </button>

   
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}


      <div
        className={`fixed bg-[#fbfbfb] left-0 top-0 h-full w-64 dark:bg-black border-r border-gray-200 dark:border-gray-800 p-4 z-40 transform transition-transform duration-200 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="mt-14 lg:mt-6 space-y-4">
          {menuItems.map(({ icon: Icon, label , path }) => (
            
            <Link
            href={path}
              key={label}
              onClick={() => {
               
                if (isMobile) setIsOpen(false);
              }}
              className={`flex cursor-pointer items-center gap-2 rounded-lg py-2 px-3 transition-colors ${
                path === pathname
                  ? "bg-[#E5E5E5] text-gray-900 dark:bg-gray-900 dark:text-white"
                  : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-900"
              }`}
            >
              
              <Icon className="h-5 w-5" />
              <span className="font-medium">{label}</span>
              
            </Link>
            
          ))}
        </div>
      </div>
    </>
  );
}