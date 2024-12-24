"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from '@/components/mode-toggle'
import { DashboardSidebar } from '@/components/dashboard-sidebar'
import { User, LogOut } from 'lucide-react'

// Demo data
const userData = {
  name: 'John Doe',
  email: 'john@example.com',
  role: 'User',
  stats: {
    projects: 5,
    tasks: 23,
    completed: 18,
  }
}

export default function Dashboard() {
  const router = useRouter()

  const handleLogout = () => {
    // Here you would typically handle the logout logic
    console.log('Logging out')
    router.push('/')
  }

  const currentUser = userData

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 glass-effect">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-2xl font-bold text-shadow">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <User className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{currentUser.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{currentUser.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <h2 className="text-3xl font-bold mb-6">Welcome, {currentUser.name}!</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 animate-slide-in">
            {Object.entries(currentUser.stats).map(([key, value]) => (
              <div key={key} className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h3 className="text-lg font-semibold capitalize">{key}</h3>
                <p className="text-3xl font-bold">{value}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

