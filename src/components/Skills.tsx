
import { Badge } from "@/components/ui/badge";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
  <div className="mb-8">
    <h3 className="text-xl font-poppins font-semibold text-rose mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <Badge 
          key={index} 
          className="bg-rose/10 text-lavender hover:bg-rose/20 border border-lavender/30 px-3 py-1"
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
    <section id="skills" className="py-20 bg-cream-light dark:bg-navy-dark">
      <div className="container px-4 mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-rose">
            <span className="text-lavender font-mono mr-2">04.</span>Skills
          </h2>
          <div className="ml-4 h-px bg-lavender/30 flex-1" />
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
