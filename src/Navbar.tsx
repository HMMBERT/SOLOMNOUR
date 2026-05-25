import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

export default function Navbar() {
  // Standardized Link class for consistency
  const navLinkClass = "px-4 py-2 text-[#A36029] text-[15px] font-medium border border-transparent hover:border-[#e2a147] hover:text-[#e2a147] rounded-md transition-all cursor-pointer whitespace-nowrap";

  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-[#E6E0D4] text-[#A36029] border-b border-[#E0C9A6]/40">
      
      {/* LEFT - LOGO */}
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Solommour Logo"
            className="h-10 w-auto object-contain"
          />
          <h1 className="font-serif text-lg tracking-[15px]">
            SOLOMMOUR
          </h1>
        </div>
{"\u00A0"}{"\u00A0"}{"\u00A0"}
        {/* NAV LINKS */}
        <div className="flex items-center gap-8">
          <Link to="/" className={navLinkClass}>HOME</Link>  {"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}
          <a
  href="https://www.facebook.com/profile.php?id=61590357570832"
  target="_blank"
  rel="noopener noreferrer"
  className={navLinkClass}
>
  SOCIALS
</a>{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}
          <Link to="/menu" className={navLinkClass}>MENU</Link>{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}
          <Link to="/contact" className={navLinkClass}>CONTACT</Link>{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}
        </div>
      </div>
    </nav>
  );
}