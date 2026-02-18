import { useEffect, useState } from "react";
import { Search, Bell, User } from "lucide-react";

const NAV_ITEMS = ["Home", "Movies", "New & Popular", "My List"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-3 transition-colors duration-500 ${
        scrolled ? "bg-background" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-8">
        <span className="text-2xl md:text-3xl font-black tracking-tight text-primary">
          StreamX
        </span>
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-5">
        <Search className="w-5 h-5 text-foreground/70 hover:text-foreground transition-colors cursor-pointer" />
        <Bell className="w-5 h-5 text-foreground/70 hover:text-foreground transition-colors cursor-pointer" />
        <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
          <User className="w-4 h-4 text-primary-foreground" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
