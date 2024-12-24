"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { SettingsModal } from '@/components/settings-modal'
import { PlanModal } from '@/components/plan-modal'
import { BarChart, Briefcase, CheckSquare, ChevronLeft, ChevronRight, Settings, CreditCard } from 'lucide-react'

export function DashboardSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <aside className={`${isCollapsed ? 'w-16' : 'w-64'} transition-all duration-300 ease-in-out`}>
      <nav className="flex flex-col h-full bg-background border-r">
        <div className="p-4 flex justify-end">
          <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)}>
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
        <div className="flex-1 flex flex-col space-y-2 p-4">
          {[
            { href: "/dashboard", icon: BarChart, label: "Dashboard" },
            { href: "/dashboard/projects", icon: Briefcase, label: "Projects" },
            { href: "/dashboard/tasks", icon: CheckSquare, label: "Tasks" },
          ].map((item) => (
            <Link key={item.href} href={item.href}>
              <Button 
                variant={pathname === item.href ? 'secondary' : 'ghost'} 
                className={`w-full justify-start ${isCollapsed ? 'px-2' : ''}`}
              >
                <item.icon className={`h-5 w-5 ${isCollapsed ? '' : 'mr-2'}`} />
                {!isCollapsed && <span>{item.label}</span>}
              </Button>
            </Link>
          ))}
        </div>
        <div className={`p-4 space-y-2 ${isCollapsed ? 'flex flex-col items-center' : ''}`}>
          <SettingsModal>
            <Button variant="ghost" size={isCollapsed ? "icon" : "default"} className={`w-full justify-start ${isCollapsed ? 'px-2' : ''}`}>
              <Settings className={`h-5 w-5 ${isCollapsed ? '' : 'mr-2'}`} />
              {!isCollapsed && <span>Settings</span>}
            </Button>
          </SettingsModal>
          <PlanModal>
            <Button variant="ghost" size={isCollapsed ? "icon" : "default"} className={`w-full justify-start ${isCollapsed ? 'px-2' : ''}`}>
              <CreditCard className={`h-5 w-5 ${isCollapsed ? '' : 'mr-2'}`} />
              {!isCollapsed && <span>View Plans</span>}
            </Button>
          </PlanModal>
        </div>
      </nav>
    </aside>
  )
}

