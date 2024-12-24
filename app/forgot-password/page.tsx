"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Header } from '@/components/header'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the password reset logic
    console.log('Password reset requested for:', email)
    // You might want to show a success message or redirect to a confirmation page
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-background">
        <div className="w-full max-w-md p-8 space-y-4 bg-card rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">Reset Password</Button>
          </form>
          <div className="text-center text-sm">
            Remember your password?{' '}
            <Link href="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

