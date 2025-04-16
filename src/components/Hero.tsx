
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-20">
      <div className="container px-4 mx-auto">
        <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-gold font-mono mb-5">Hi, my name is</p>
          <h1 className="text-4xl md:text-7xl font-bold font-poppins text-slate-light mb-4">
            Saloni Sinha.
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold font-poppins text-slate mb-8">
            I build things for the web.
          </h2>
          <p className="text-slate max-w-xl text-lg mb-10">
            I'm a software engineering student specializing in building exceptional digital experiences. 
            Currently focused on enhancing my skills in web development and software engineering.
          </p>
          <a href="#contact">
            <Button
              size="lg"
              className="bg-transparent hover:bg-gold/10 text-gold border border-gold"
            >
              Get in touch
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
