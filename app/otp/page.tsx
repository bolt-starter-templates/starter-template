"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Header } from '@/components/header'

export default function OTP() {
  const [otp, setOtp] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the OTP verification logic
    console.log('OTP submitted:', otp)
    // For demo purposes, we'll just redirect to the dashboard
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-background">
        <div className="w-full max-w-md p-8 space-y-4 bg-card rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center">Enter OTP</h2>
          <p className="text-center text-muted-foreground">
            We've sent a one-time password to your email. Please enter it below.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="otp">One-Time Password</Label>
              <Input
                id="otp"
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">Verify OTP</Button>
          </form>
        </div>
      </main>
    </div>
  )
}

