'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap } from 'lucide-react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import dynamic from 'next/dynamic'

const AnimatedLightbulb = dynamic(() => import('@/components/AnimatedLightbulb'), { ssr: false })

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-4 flex items-center justify-center">
            PowerSmart
            <Zap className="inline-block ml-2 text-yellow-400" />
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Intelligent Household Energy Monitoring
          </p>
        </header>

        <main className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                  Take Control of Your Energy Usage
                </h2>
                <p className="text-gray-600 mb-6">
                  PowerSmart uses advanced machine learning to help you monitor, 
                  predict, and optimize your household's power consumption. 
                  Save money and reduce your carbon footprint with real-time insights.
                </p>
                <Link href="/dashboard">
                  <Button size="lg" className="w-full md:w-auto">
                    Get Started
                    <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <div className="w-full h-64 relative">
                  <Canvas>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    <AnimatedLightbulb />
                  </Canvas>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Real-time Monitoring" 
              description="Track your appliances' power usage in real-time."
              imageSrc="/images/real-time-monitoring.jpg"
            />
            <FeatureCard 
              title="Predictive Analysis" 
              description="Forecast future energy consumption and costs."
              imageSrc="/images/predictive-analysis.jpg"
            />
            <FeatureCard 
              title="Energy-Saving Tips" 
              description="Receive personalized recommendations to reduce usage."
              imageSrc="/images/energy-saving-tips.jpg"
            />
          </div>
        </main>
      </div>
    </div>
  )
}

function FeatureCard({ title, description, imageSrc }: { title: string, description: string, imageSrc: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

