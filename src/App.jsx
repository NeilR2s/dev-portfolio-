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
            <main className="container max-w-7xl mx-auto px-10 py-8 md:py-16">
                <div className="space-y-16 md:space-y-24">
                    <Hero portfolioData={portfolioData}/>
                    <Experience portfolioData={portfolioData} />
                    <Projects portfolioData={portfolioData} />
                    <Skills portfolioData={portfolioData} />
                </div>
            </main>
            <Footer portfolioData={portfolioData}/>
        </div>
    )
}
