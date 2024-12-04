'use client'

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Tv, Refrigerator, Laptop, Lamp, WashingMachine, Coffee, Zap } from 'lucide-react'

const appliances = [
  { id: 'television', name: 'Television', icon: Tv, power: 100, usage: 4, description: 'A device for receiving television broadcasts or displaying video content.' },
  { id: 'refrigerator', name: 'Refrigerator', icon: Refrigerator, power: 150, usage: 24, description: 'An appliance for keeping food and drinks cool.' },
  { id: 'computer', name: 'Computer', icon: Laptop, power: 200, usage: 8, description: 'An electronic device for storing and processing data.' },
  { id: 'lamp', name: 'Lamp', icon: Lamp, power: 60, usage: 6, description: 'A device for giving light.' },
  { id: 'washing-machine', name: 'Washing Machine', icon: WashingMachine, power: 500, usage: 1, description: 'An appliance for washing clothes.' },
  { id: 'coffee-maker', name: 'Coffee Maker', icon: Coffee, power: 1000, usage: 0.5, description: 'An appliance for brewing coffee.' },
]

export default function AppliancePage() {
  const router = useRouter()
  const { id } = useParams()
  const appliance = appliances.find(a => a.id === id)

  if (!appliance) {
    return <div>Appliance not found</div>
  }

  const Icon = appliance.icon

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            {appliance.name}
            <Icon className="ml-2 text-blue-500" />
          </h1>
          <Button variant="outline" onClick={() => router.back()}>
            <ArrowLeft className="mr-2" />
            Back to Dashboard
          </Button>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{appliance.name} Details</CardTitle>
              <CardDescription>{appliance.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold">Power Consumption</h3>
                  <p>{appliance.power} Watts</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Average Daily Usage</h3>
                  <p>{appliance.usage} hours</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Daily Energy Consumption</h3>
                  <p>{appliance.power * appliance.usage / 1000} kWh</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Estimated Monthly Cost</h3>
                  <p>${((appliance.power * appliance.usage / 1000) * 30 * 0.12).toFixed(2)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">Energy Saving Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Unplug the {appliance.name.toLowerCase()} when not in use to avoid standby power consumption.</li>
                <li>If applicable, use energy-saving modes or settings.</li>
                <li>Consider upgrading to a more energy-efficient model if this {appliance.name.toLowerCase()} is old.</li>
                <li>Regular maintenance can help keep the {appliance.name.toLowerCase()} running efficiently.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

