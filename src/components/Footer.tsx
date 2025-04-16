
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="py-8 text-center">
      <div className="container px-4 mx-auto">
        <SocialLinks className="justify-center mb-5" />
        
        <p className="text-slate text-sm">
          Designed & Built by Saloni Sinha &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
