import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SlidingMenu from "@/components/SlidingMenu";

import { ModeToggle } from "@/components/ui/ModeToggle";

import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <ModeToggle />
      <SlidingMenu />

      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-3xl font-bold">
                  Christie Netto
                </CardTitle>
                <p className="text-gray-500">
                  Computer and Data Science Student
                </p>
              </div>
              <img
                src="/placeholder.svg?height=100&width=100"
                alt="Christie Netto"
                className="rounded-full w-24 h-24 object-cover"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 mb-4">
              <Button variant="outline" size="sm" asChild>
                <a
                  href="mailto:christienetto@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  christienetto@gmail.com
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="tel:+358442363773">
                  <Phone className="mr-2 h-4 w-4" />
                  (+358) 442363773
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://github.com/christienetto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  github.com/christienetto
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://www.linkedin.com/in/christie-netto-a50765318"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn Profile
                </a>
              </Button>
            </div>
            <p className="text-gray-700 mb-4">
              Looking for exciting new opportunities! I love leadership roles
              and am eagerly after them as I love taking on responsibility and
              delivering a good result as a team. I love bouldering, swimming,
              have played the piano and guitar for 5 years, and occasionally
              make YouTube music videos. I have a drivers license and a
              hygienepass :))
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Work Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold">
                  Tenant Committee Chair
                </h3>
                <p className="text-gray-500">
                  HOAS | Aug 2024 - Current | Helsinki, Finland
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li>Organizing Events</li>
                  <li>Financing</li>
                  <li>Leadership skills</li>
                  <li>Maintaining relations with tenants</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Senior Producer</h3>
                <p className="text-gray-500">
                  Kumpulan Speksi | Jun 2024 - Jun 2025 | Helsinki, Finland
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li>
                    Managing a team, leadership, communication, and delegation
                    of work
                  </li>
                  <li>
                    Producing, marketing, financing, organizing venues and
                    sponsorship
                  </li>
                  <li>Google calendar, Telegram, and Excel</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  F2F Fundraising as a Travelling Salesman
                </h3>
                <p className="text-gray-500">
                  Pelastakaa Lapset | Aug 2023 - Jan 2024 | Helsinki, Finland
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li>Public Speaking and self-confidence</li>
                  <li>Persuasiveness, determination, and tenacity</li>
                  <li>Communication, sales, and entrepreneurship</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Acting as Side Character in 'Lovi' TV drama series
                </h3>
                <p className="text-gray-500">
                  Yellow Films | Jul 2022 - Aug 2022 | Helsinki, Finland
                </p>
                <p className="mt-2 text-gray-700">
                  Played the side character role in the series 'Lovi'. My
                  character name was Lin and I played the main character's
                  schoolmate. Also worked as a background actor in 3 series.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Education</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">
                  Bachelor's in Computer and Data Science
                </h3>
                <p className="text-gray-500">
                  University of Helsinki | Sep 2022 - Current
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  International Baccalaureate
                </h3>
                <p className="text-gray-500">
                  Joensuun lyseon lukio | Aug 2019 - Jun 2022
                </p>
                <p className="mt-2 text-gray-700">
                  Tukoke granted my Extended Essay in biology a shared 3rd rank
                  within Finland, attaining a stipend from TEK of 600 euros.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge>Microsoft Office</Badge>
              <Badge>Python</Badge>
              <Badge>Data Analysis</Badge>
              <Badge>Software Development</Badge>
              <Badge>Machine Learning</Badge>
              <Badge>Git</Badge>
              <Badge>Artificial Intelligence</Badge>
              <Badge>Data Science</Badge>
              <Badge>Numpy</Badge>
              <Badge>Pandas</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
