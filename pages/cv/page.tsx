import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Christie Netto</h1>
          <p className="text-xl text-gray-600">
            Computer and Data Science Student | Aspiring Leader
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">About Me</h2>
              <p className="text-gray-700 mb-4">
                I'm a passionate Computer and Data Science student at the
                University of Helsinki, eagerly seeking new opportunities. I
                thrive in leadership roles, taking on responsibilities and
                delivering excellent results as part of a team.
              </p>
              <p className="text-gray-700 mb-4">
                Beyond academics, I'm an avid bouldering enthusiast and swimmer.
                I've played the piano and guitar for 5 years and occasionally
                create YouTube music videos. I hold a driver's license and a
                hygienepass.
              </p>
              <Link href="/about" passHref>
                <Button variant="outline">
                  Learn More About Me
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Skills Highlight</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>Python</Badge>
                <Badge>Data Analysis</Badge>
                <Badge>Machine Learning</Badge>
                <Badge>Artificial Intelligence</Badge>
                <Badge>Data Science</Badge>
                <Badge>Leadership</Badge>
                <Badge>Event Organization</Badge>
                <Badge>Public Speaking</Badge>
              </div>
              <Link href="/skills" passHref>
                <Button variant="outline">
                  View All Skills
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-16">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Featured Experience</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="text-lg font-semibold">
                  Tenant Committee Chair
                </h3>
                <p className="text-gray-600">HOAS | Helsinki, Finland</p>
              </li>
              <li>
                <h3 className="text-lg font-semibold">Senior Producer</h3>
                <p className="text-gray-600">
                  Kumpulan Speksi | Helsinki, Finland
                </p>
              </li>
              <li>
                <h3 className="text-lg font-semibold">
                  F2F Fundraising as a Travelling Salesman
                </h3>
                <p className="text-gray-600">
                  Pelastakaa Lapset | Helsinki, Finland
                </p>
              </li>
            </ul>
            <Link href="/experience" passHref>
              <Button variant="outline" className="mt-4">
                View Full Experience
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <footer className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:christienetto@gmail.com" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="tel:+358442363773" aria-label="Phone">
                <Phone className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com/christienetto"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/christie-netto-a50765318"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
}
