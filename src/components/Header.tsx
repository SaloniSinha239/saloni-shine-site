
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy/95 shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container px-4 mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <div className="font-poppins font-bold text-2xl text-gold">SS</div>
          <span className="sr-only">Saloni Sinha</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((item, i) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className="text-slate-light hover:text-gold transition-colors font-inter font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gold hover:after:w-full after:transition-all"
                >
                  <span className="text-gold mr-1 text-sm">{`0${i + 1}.`}</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="outline" className="border-gold text-gold hover:bg-gold/10">
            Resume
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-light hover:text-gold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-screen w-[70%] bg-navy-light transform transition-transform duration-300 ease-in-out z-50 pt-20 px-6 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col space-y-6">
          {navItems.map((item, i) => (
            <li key={item.name} className="text-center">
              <a 
                href={item.href}
                className="text-slate-light hover:text-gold transition-colors font-inter text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="text-gold text-sm">{`0${i + 1}.`}</div>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex justify-center">
          <Button 
            variant="outline" 
            className="border-gold text-gold hover:bg-gold/10"
          >
            Resume
          </Button>
        </div>
      </div>
      
      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-navy-dark/70 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}
