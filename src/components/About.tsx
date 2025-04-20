import { Award, BookOpen } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-cream-light dark:bg-navy-dark">
      <div className="container px-4 mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-rose">
            <span className="text-lavender font-mono mr-2">01.</span>About Me
          </h2>
          <div className="ml-4 h-px bg-lavender/30 flex-1" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-navy-light dark:text-slate mb-4">
              Hello! I'm Saloni, a passionate software engineering student with a deep interest in creating robust web applications and user interfaces that provide exceptional experiences.
            </p>
            <p className="text-navy-light dark:text-slate mb-4">
              During my academic journey, I've developed a strong foundation in computer science principles, algorithms, and various programming languages. I enjoy tackling complex problems and constantly strive to improve my skills.
            </p>
            <p className="text-navy-light dark:text-slate">
              When I'm not coding, you can find me exploring new technologies, reading tech blogs, or participating in coding competitions to challenge myself.
            </p>
          </div>
          
          <div className="bg-rose/10 p-6 rounded-lg border border-lavender/20">
            <div className="flex mb-6 items-center">
              <div className="p-3 rounded-full bg-lavender/10 mr-4">
                <BookOpen className="text-lavender" size={24} />
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-rose">Education Focus</h3>
                <p className="text-navy-light dark:text-slate">Specialized in computer science and software engineering</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-lavender/10 mr-4">
                <Award className="text-lavender" size={24} />
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-rose">Key Strengths</h3>
                <p className="text-navy-light dark:text-slate">Problem-solving, analytical thinking, and teamwork</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
