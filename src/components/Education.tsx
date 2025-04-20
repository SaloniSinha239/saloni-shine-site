
import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface EducationItemProps {
  degree: string;
  institution: string;
  date: string;
  description: string;
}

const EducationItem = ({ degree, institution, date, description }: EducationItemProps) => (
  <Card className="bg-rose/10 border-lavender/20 mb-6">
    <CardContent className="pt-6">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-poppins font-semibold text-xl text-rose">
            {degree}
          </h3>
          <p className="text-lavender">{institution}</p>
        </div>
        <div className="flex items-center text-navy-light dark:text-slate text-sm">
          <Calendar size={14} className="mr-1" />
          {date}
        </div>
      </div>
      
      <p className="mt-4 text-navy-light dark:text-slate">
        {description}
      </p>
    </CardContent>
  </Card>
);

export default function Education() {
  const educationItems = [
    {
      degree: "Bachelor of Technology in Software Engineering",
      institution: "University of Delhi",
      date: "2021 - 2025",
      description: "Pursuing a comprehensive program focused on software development methodologies, algorithms, data structures, and modern programming languages. Participating in various coding competitions and technical workshops to enhance skills."
    },
    {
      degree: "Higher Secondary Education",
      institution: "Delhi Public School",
      date: "2019 - 2021",
      description: "Completed higher secondary education with a focus on Mathematics, Physics, and Computer Science. Participated in school's tech club and developed interest in programming."
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-rose">
            <span className="text-lavender font-mono mr-2">03.</span>Education
          </h2>
          <div className="ml-4 h-px bg-lavender/30 flex-1" />
        </div>
        
        <div className="max-w-3xl mx-auto">
          {educationItems.map((item, index) => (
            <EducationItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
