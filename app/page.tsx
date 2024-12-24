import Link from 'next/link'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our SaaS Platform</h1>
          <p className="text-xl mb-8">Empower your business with our cutting-edge solutions.</p>
          <Link href="/login">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

