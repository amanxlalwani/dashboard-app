"use client"

import Card from '@/components/Card'
import InputBox from '@/components/InputBox'
import { useState, ChangeEvent } from 'react'


interface ProfileFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
}

export default function Profile() {
  const [formData, setFormData] = useState<ProfileFormData>({
    firstName: "Aman",
    lastName: "Lalwani",
    email: "aman.lalwani@example.com",
    phone: "+919876543210"
  })

  const [currentPassword, setCurrentPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  return (
    <div className="space-y-6 px-4 py-4">
      <Card CardTitle='Profile Information' >
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="h-24 w-24 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop"
                alt="Profile picture"
                className="h-full w-full object-cover"
              />
            </div>
            <button className="px-4 py-2 border rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
              Change Photo
            </button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <InputBox label="First Name" id="firstName" type="text" handleInputChange={handleInputChange} value={formData.firstName}></InputBox>
            <InputBox label="Last Name" id="lastName" type="text" handleInputChange={handleInputChange} value={formData.lastName}></InputBox>
            <InputBox label="Email" id="email" type='email' handleInputChange={handleInputChange} value={formData.email}></InputBox>
            <InputBox label="Phone Number" id="phone" type='tel' handleInputChange={handleInputChange} value={formData.phone}></InputBox>
          </div>
          <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Update Profile
          </button>
        </div>
      </Card>

      <Card CardTitle='Password'>
        <div className="space-y-4">
          <InputBox label="Current Password" id="currentPassword" type='password' handleInputChange={(e) => { setCurrentPassword(e.target.value) }} value={currentPassword}></InputBox>
          <InputBox label="New Password" id="newtPassword" type='password' handleInputChange={(e) => { setNewPassword(e.target.value) }} value={newPassword}></InputBox>
          <InputBox label="Confirm New Password" id="confirmPassword" type='password' handleInputChange={(e) => { setConfirmPassword(e.target.value) }} value={confirmPassword}></InputBox>
          <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Update Password
          </button>
        </div>
      </Card>


    </div>
  )
}