import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-background">
      <Link href="/" className="text-2xl font-bold">
        SaaS Template
      </Link>
      <nav className="flex items-center space-x-4">
        <Link href="/login">
          <Button variant="ghost">Login</Button>
        </Link>
        <Link href="/register">
          <Button>Sign Up</Button>
        </Link>
        <ModeToggle />
      </nav>
    </header>
  )
}

