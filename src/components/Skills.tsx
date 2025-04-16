
import { Badge } from "@/components/ui/badge";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
  <div className="mb-8">
    <h3 className="text-xl font-poppins font-semibold text-slate-light mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <Badge 
          key={index} 
          className="bg-navy-light text-slate-light hover:bg-navy-light/80 border border-gold/30 px-3 py-1"
        >
          {skill}
        </Badge>
      ))}
    </div>
  </div>
);

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML", "CSS"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Express", "Redux", "Next.js", "Bootstrap", "Tailwind CSS"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "MongoDB", "MySQL", "Docker", "REST API", "Figma"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Critical Thinking", "Adaptability"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-slate-light">
            <span className="text-gold font-mono mr-2">04.</span>Skills
          </h2>
          <div className="ml-4 h-px bg-slate-dark flex-1" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
