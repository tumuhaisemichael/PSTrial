'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Tv, Refrigerator, Laptop, Lamp, WashingMachine, Coffee, Zap, BarChart3 } from 'lucide-react'

const appliances = [
  { id: 'television', name: 'Television', icon: Tv, power: 100, usage: 4 },
  { id: 'refrigerator', name: 'Refrigerator', icon: Refrigerator, power: 150, usage: 24 },
  { id: 'computer', name: 'Computer', icon: Laptop, power: 200, usage: 8 },
  { id: 'lamp', name: 'Lamp', icon: Lamp, power: 60, usage: 6 },
  { id: 'washing-machine', name: 'Washing Machine', icon: WashingMachine, power: 500, usage: 1 },
  { id: 'coffee-maker', name: 'Coffee Maker', icon: Coffee, power: 1000, usage: 0.5 },
]

export default function Dashboard() {
  const [selectedAppliance, setSelectedAppliance] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            PowerSmart Dashboard
            <Zap className="ml-2 text-yellow-400" />
          </h1>
          <Link href="/ml-model">
            <Button variant="outline">
              ML Model
              <BarChart3 className="ml-2" />
            </Button>
          </Link>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {appliances.map((appliance) => (
              <ApplianceCard
                key={appliance.id}
                appliance={appliance}
                isSelected={selectedAppliance === appliance.id}
                onSelect={() => setSelectedAppliance(appliance.id)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

function ApplianceCard({ 
  appliance, 
  isSelected, 
  onSelect 
}: { 
  appliance: typeof appliances[0]
  isSelected: boolean
  onSelect: () => void
}) {
  const Icon = appliance.icon
  return (
    <Link href={`/appliance/${appliance.id}`}>
      <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {appliance.name}
          </CardTitle>
          <Icon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <Checkbox
              checked={isSelected}
              onCheckedChange={(e) => {
                e.preventDefault()
                onSelect()
              }}
            />
            {isSelected && (
              <div>
                <CardDescription>Power: {appliance.power}W</CardDescription>
                <CardDescription>Usage: {appliance.usage} hours/day</CardDescription>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

