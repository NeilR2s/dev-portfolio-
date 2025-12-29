import { SectionHeader } from "./Typography";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function Projects({portfolioData}) {
    return (
        <section id="projects" className="space-y-6">
            <SectionHeader  title="Projects" />
            <div className="grid grid-cols-1  gap-6">
                {portfolioData.projects.map((project, index) => (
                    <Card key={index} className="flex flex-col">
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-4">
                            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                {project.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                    <Badge variant="secondary" key={i}>{tech}</Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter>
                            {/* Per the principles, a link to the code is essential. We use the main GitHub as a fallback. */}
                            <Button variant="outline" size="sm" asChild>
                                <a href={portfolioData.personalInfo.github} target="_blank" rel="noreferrer">
                                    View Code
                                    <Github className="ml-2 size-4" />
                                </a>
                            </Button>

                            {/* Example of using a Dialog for "Learn More" */}
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="ghost" size="sm" className="ml-2">Learn More</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-xl">
                                    <DialogHeader>
                                        <DialogTitle>{project.title}</DialogTitle>
                                        <DialogDescription asChild>
                                            <div className="pt-2 flex flex-wrap gap-2">
                                                {project.technologies.map((tech, i) => (
                                                    <Badge variant="secondary" key={i}>{tech}</Badge>
                                                ))}
                                            </div>
                                        </DialogDescription>
                                    </DialogHeader>
                                    <ul className="list-disc pl-5 space-y-2 text-sm max-h-[60vh] overflow-y-auto pr-4">
                                        {project.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </DialogContent>
                            </Dialog>

                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}