import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialLinks from "./SocialLinks";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
}

const ContactItem = ({ icon, title, content, link }: ContactItemProps) => (
  <div className="flex items-start mb-6">
    <div className="p-3 rounded-full bg-lavender/10 mr-4">
      {icon}
    </div>
    <div>
      <h3 className="font-poppins font-semibold text-rose">{title}</h3>
      {link ? (
        <a href={link} className="text-navy-light dark:text-slate hover:text-lavender transition-colors">
          {content}
        </a>
      ) : (
        <p className="text-navy-light dark:text-slate">{content}</p>
      )}
    </div>
  </div>
);

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-rose">
            <span className="text-lavender font-mono mr-2">05.</span>Contact
          </h2>
          <div className="ml-4 h-px bg-lavender/30 flex-1" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-poppins font-semibold text-slate-light mb-6">Get In Touch</h3>
            
            <ContactItem 
              icon={<Mail className="text-gold" size={20} />}
              title="Email"
              content="contact@example.com"
              link="mailto:contact@example.com"
            />
            
            <ContactItem 
              icon={<Phone className="text-gold" size={20} />}
              title="Phone"
              content="+91 98765 43210"
              link="tel:+919876543210"
            />
            
            <ContactItem 
              icon={<MapPin className="text-gold" size={20} />}
              title="Location"
              content="Delhi, India"
            />
            
            <div className="mt-8">
              <h3 className="font-poppins font-semibold text-slate-light mb-4">Follow Me</h3>
              <SocialLinks />
            </div>
          </div>
          
          <div className="bg-rose/10 p-6 rounded-lg border border-lavender/20">
            <h3 className="text-xl font-poppins font-semibold text-rose mb-6">Send a Message</h3>
            
            <form>
              <div className="mb-4">
                <Input 
                  placeholder="Your Name" 
                  className="bg-navy/50 border-slate-dark focus:border-gold text-slate-light"
                />
              </div>
              
              <div className="mb-4">
                <Input 
                  type="email"
                  placeholder="Your Email" 
                  className="bg-navy/50 border-slate-dark focus:border-gold text-slate-light"
                />
              </div>
              
              <div className="mb-4">
                <Input 
                  placeholder="Subject" 
                  className="bg-navy/50 border-slate-dark focus:border-gold text-slate-light"
                />
              </div>
              
              <div className="mb-6">
                <Textarea 
                  placeholder="Your Message" 
                  className="bg-navy/50 border-slate-dark focus:border-gold text-slate-light"
                  rows={5}
                />
              </div>
              
              <Button
                type="submit"
                className="bg-lavender/10 hover:bg-lavender/20 text-lavender border border-lavender"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
