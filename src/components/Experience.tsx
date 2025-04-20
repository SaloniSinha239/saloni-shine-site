
import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ExperienceItemProps {
  title: string;
  company: string;
  date: string;
  description: string[];
}

const ExperienceItem = ({ title, company, date, description }: ExperienceItemProps) => (
  <Card className="bg-rose/10 border-lavender/20 mb-6">
    <CardContent className="pt-6">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-poppins font-semibold text-xl text-rose">
            {title}
          </h3>
          <p className="text-lavender">{company}</p>
        </div>
        <div className="flex items-center text-navy-light dark:text-slate text-sm">
          <Calendar size={14} className="mr-1" />
          {date}
        </div>
      </div>
      
      <ul className="mt-4 space-y-2">
        {description.map((item, index) => (
          <li key={index} className="text-navy-light dark:text-slate flex">
            <span className="text-lavender mr-2">▹</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Tech Solutions Ltd",
      date: "May 2023 - August 2023",
      description: [
        "Assisted in developing and maintaining web applications using React and Node.js",
        "Collaborated with senior developers to implement new features and fix bugs",
        "Participated in code reviews and team meetings to improve development practices",
        "Gained hands-on experience with database management and API integration"
      ]
    },
    {
      title: "Web Development Project",
      company: "University of Delhi",
      date: "Jan 2023 - April 2023",
      description: [
        "Designed and developed a responsive website for a university department",
        "Implemented frontend features with HTML, CSS, and JavaScript",
        "Worked with a team of 3 students to meet project requirements and deadlines",
        "Presented final project to faculty and received positive feedback"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-cream-light dark:bg-navy-dark">
      <div className="container px-4 mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-rose">
            <span className="text-lavender font-mono mr-2">02.</span>Experience
          </h2>
          <div className="ml-4 h-px bg-lavender/30 flex-1" />
        </div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
