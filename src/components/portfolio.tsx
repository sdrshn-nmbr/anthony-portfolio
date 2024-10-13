'use client'

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function PortfolioComponent() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-xl font-bold">Your Name</span>
          <div className="space-x-4">
            <Link href="#about" className="hover:text-blue-600 transition-colors">About</Link>
            <Link href="#projects" className="hover:text-blue-600 transition-colors">Projects</Link>
            <Link href="#contact" className="hover:text-blue-600 transition-colors">Contact</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="about" className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <Image
                src="/placeholder.jpg"
                alt="Your Name"
                width={300}
                height={300}
                className="rounded-full"
              />
              <div className="absolute inset-0 rounded-full border-4 border-blue-200 opacity-75"></div>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">Your Name</h1>
              <p className="text-xl mb-2">Graduating Class of 2026</p>
              <p className="text-gray-600 mb-4">
                A brief description about yourself, your interests, and your goals. 
                Highlight your key skills and what you're passionate about in your field of study.
              </p>
              <Link 
                href="#contact" 
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-200 pb-2">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((project) => (
              <div key={project} className="border border-gray-200 rounded-lg p-6 hover:border-blue-200 transition-colors">
                <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                <p className="text-gray-600 mb-4">Brief description of your project and its significance.</p>
                <Link href="#" className="text-blue-600 hover:underline">View Documentation</Link>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-200 pb-2">Contact</h2>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-4 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
