"use client"

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"

const plans = [
  {
    name: 'Basic',
    price: '$9.99/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    name: 'Pro',
    price: '$19.99/month',
    features: ['All Basic features', 'Feature 4', 'Feature 5'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['All Pro features', 'Feature 6', 'Feature 7', 'Custom support'],
  },
]

export function PlanModal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Choose a Plan</DialogTitle>
          <DialogDescription>
            Select the plan that best fits your needs.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Select {plan.name}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <DialogFooter>
          <DialogDescription>
            Need help choosing? Contact our sales team.
          </DialogDescription>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

