import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "./ui/button";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function Hero ({ portfolioData }) {
    const { personalInfo} = portfolioData;

    return (
        <section id="about" className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <Avatar className="size-30 md:size-40 border-0 border-primary/10">
                <AvatarImage src={personalInfo.iconWhite} alt={personalInfo.name} />
                <AvatarFallback className="text-4xl">
                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
            </Avatar>
            <div className="space-y-3 items-start">
                <h1 className="text-4xl font-medium leading-tight">{personalInfo.name}</h1>
                <div className="flex items-center gap-2 prose text-base text-muted-foreground">
                        <ReactMarkdown>{personalInfo.summary}</ReactMarkdown>
                </div>
                <div className="flex flex-wrap pt-2">

                    <Button variant="ghost" size="sm" asChild>
                        <a href={`mailto:${personalInfo.email}`} target="_blank" rel="noreferrer">
                            <Mail className="size-4" />
                            <span className="ml-2">{personalInfo.email}</span>
                        </a>
                    </Button>

                    <Button variant="ghost" size="sm" asChild>
                        <a href={personalInfo.github} target="_blank" rel="noreferrer">
                            <Github className="size-4" />
                            <span className="ml-2">GitHub</span>
                        </a>
                    </Button>

                    <Button variant="ghost" size="sm" asChild>
                        <a href={personalInfo.linkedin}>
                            <Linkedin className="size-4" />
                            <span className="ml-2">Linkedin</span>
                        </a>
                    </Button>
                    
                    <Button variant="ghost" size="sm">
                        <MapPin className="size-4" />
                        <span className="ml-2">{personalInfo.location}</span>
                    </Button>
                </div>
            </div>
        </section>
    );
}