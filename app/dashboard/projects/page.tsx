"use client"

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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Demo data
const userData = {
  name: 'John Doe',
  email: 'john@example.com',
  role: 'User',
}

const projectsData = [
  { id: 1, name: 'Website Redesign', status: 'In Progress', dueDate: '2023-12-31' },
  { id: 2, name: 'Mobile App Development', status: 'Planning', dueDate: '2024-03-15' },
  { id: 3, name: 'Database Migration', status: 'Completed', dueDate: '2023-11-30' },
  { id: 4, name: 'AI Integration', status: 'In Progress', dueDate: '2024-02-28' },
  { id: 5, name: 'Security Audit', status: 'Not Started', dueDate: '2024-01-15' },
]

export default function Projects() {
  const router = useRouter()

  const handleLogout = () => {
    // Here you would typically handle the logout logic
    console.log('Logging out')
    router.push('/')
  }

  const currentUser = userData

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-2xl font-bold">Projects</h1>
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
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Due Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projectsData.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">{project.name}</TableCell>
                  <TableCell>{project.status}</TableCell>
                  <TableCell>{project.dueDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </main>
      </div>
    </div>
  )
}

