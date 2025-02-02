"use client"

import Card from '@/components/Card'
import { useState } from 'react'

interface SettingsState {
  emailNotifications: boolean
  pushNotifications: boolean
  autologout: boolean
}

export default function Settings() {
  const [settings, setSettings] = useState<SettingsState>({
    emailNotifications: true,
    pushNotifications: true,
    autologout: false
  })


  const handleSettingChange = (setting: keyof SettingsState) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }))
  }
  

  return (
    <div className="space-y-6 px-4 my-4">
      <Card CardTitle='Notifications'>
                
      <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-sm font-medium">Email Notifications</label>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Receive email updates about your account activity
              </div>
            </div>
            <button
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                ${settings.emailNotifications ? 'bg-black dark:bg-white' : 'bg-gray-200 dark:bg-gray-700'}`}
              onClick={() => handleSettingChange('emailNotifications')}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white dark:bg-gray-900 transition-transform
                  ${settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'}`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-sm font-medium">Push Notifications</label>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Receive push notifications about important updates
              </div>
            </div>
            <button
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                ${settings.pushNotifications ? 'bg-black dark:bg-white' : 'bg-gray-200 dark:bg-gray-700'}`}
              onClick={() => handleSettingChange('pushNotifications')}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white dark:bg-gray-900 transition-transform
                  ${settings.pushNotifications ? 'translate-x-6' : 'translate-x-1'}`}
              />
            </button>
          </div>
        </div>
      </Card>
      <Card CardTitle='Security'>
      <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-sm font-medium">Auto Logout</label>
              <div className="text-sm text-gray-500 dark:text-gray-400">
               Auto Logout After Inactivity For Better Security
              </div>
            </div>
            <button
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                ${settings.autologout ? 'bg-black dark:bg-white' : 'bg-gray-200 dark:bg-gray-700'}`}
              onClick={() => handleSettingChange('autologout')}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white dark:bg-gray-900 transition-transform
                  ${settings.autologout ? 'translate-x-6' : 'translate-x-1'}`}
              />
            </button>
          </div>
        </div>      
      </Card>
    </div>
  )
}