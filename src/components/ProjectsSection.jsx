import { SectionHeader } from "./Typography";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card"
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";

export default function Projects({portfolioData}) {
    return (
        <section id="projects" className="space-y-4">
            <SectionHeader  title="Projects" />
            <div className="grid grid-cols-[auto, 1fr] gap-6">
                {portfolioData.projects.map((project, index) => (
                    <Card key={index} className="flex flex-col border border-muted hover:border-primary/15 transition-colors h-full">
                        
                        <CardHeader className="pb-0.5">
                            <CardTitle className="text-xl">{project.title}</CardTitle>

                            <CardDescription className="text-base text-foreground/60 leading-snug">
                                {project.summary}
                            </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="flex-grow space-y-6">
                            <div className="bg-secondary/30 p-3 rounded-md border-l-2 border-primary">
                                <p className="text-sm font-medium italic text-muted-foreground">
                                    "{project.impact}"
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                    <Badge variant="secondary" key={i} className="text-xs">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>

                        <CardFooter className="gap-3">
                            {/* Logic to handle specific links */}
                            {project.githubLink ? (
                                <Button variant="outline" size="sm" asChild>
                                    <a href={project.githubLink} target="_blank" rel="noreferrer">
                                        View Code
                                        <Github className="ml-2 size-4" />
                                    </a>
                                </Button>
                            ) : (
                                <Button variant="outline" size="sm" disabled>
                                    Private
                                    <Github className="ml-2 size-4" />
                                </Button>
                            )}

                            {project.deploymentLink && (
                                <Button variant="default" size="sm" asChild>
                                    <a href={project.deploymentLink} target="_blank" rel="noreferrer">
                                        Visit Site
                                        <ExternalLink className="ml-2 size-4" />
                                    </a>
                                </Button>
                            )}

                            {project.infoLink && (
                                <Button variant="default" size="sm" asChild>
                                    <a href={project.infoLink} target="_blank" rel="noreferrer">
                                        More Info
                                        <ExternalLink className="ml-2 size-4" />
                                    </a>
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}