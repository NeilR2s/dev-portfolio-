import { portfolioData } from './devData.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Experience from './components/ExperienceSection.jsx'
import Projects from './components/ProjectsSection.jsx'
import Skills from './components/SkillsSection.jsx'
import Footer from './components/Footer.jsx'


export default function App() {
    return (
        <div className="font-sans bg-background text-foreground min-h-screen">
            <Header portfolioData={portfolioData} />
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 z-50 bg-background px-3 py-2 rounded"
            >
                Skip to content
            </a>

            <main id="main" className="container max-w-7xl mx-auto px-10 py-8 md:py-16">
                <div className="space-y-16 md:space-y-24">
                    <Hero portfolioData={portfolioData} />
                    <Experience portfolioData={portfolioData} />
                    <Projects portfolioData={portfolioData} />
                    <Skills portfolioData={portfolioData} />
                </div>
            </main>
            <Footer portfolioData={portfolioData} />
        </div>
    )
}
