import React from "react";

export default function Card({CardTitle,children}:{CardTitle:string,children:React.ReactNode}){

    return <>
    <div className="rounded-lg flex flex-col gap-4 h-full w-full border border-gray-200 drop-shadow-sm bg-white p-4 lg:p-6 dark:border-gray-800 dark:bg-black">
    <h2 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">{CardTitle}</h2>

    {children}
    </div>
    </>

}
