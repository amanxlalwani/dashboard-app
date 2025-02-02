import {ChangeEvent} from 'react'
export default function InputBox({label,value,type,handleInputChange,id}:{label:string,value:string,type:string,handleInputChange: (e:ChangeEvent<HTMLInputElement>) => void,id:string}){
 return <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium">{label}</label>
              <input
                type={type}
                id={id}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-800 dark:border-gray-700"
                value={value}
                onChange={handleInputChange}
              />
        </div>   
}