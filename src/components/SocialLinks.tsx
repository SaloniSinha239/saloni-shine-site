
import { Github, Linkedin, Mail } from 'lucide-react';

interface SocialLinksProps {
  vertical?: boolean;
  className?: string;
}

export default function SocialLinks({ vertical = false, className = '' }: SocialLinksProps) {
  return (
    <div className={`flex ${vertical ? 'flex-col space-y-6' : 'space-x-6'} ${className}`}>
      <a 
        href="https://www.linkedin.com/in/saloni-sinha-8521b726b/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate hover:text-gold transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={22} />
      </a>
      <a 
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate hover:text-gold transition-colors"
        aria-label="GitHub"
      >
        <Github size={22} />
      </a>
      <a 
        href="mailto:contact@example.com"
        className="text-slate hover:text-gold transition-colors"
        aria-label="Email"
      >
        <Mail size={22} />
      </a>
    </div>
  );
}
