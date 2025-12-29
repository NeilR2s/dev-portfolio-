export default function Footer({portfolioData}) {
    const { personalInfo } = portfolioData;
    return (
        <footer className="text-center text-sm text-muted-foreground py-8 border-t">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </footer>
    );
}