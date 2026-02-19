import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Bell, User, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const NAV_ITEMS = ["Home", "Movies", "New & Popular", "My List"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { user, signOut } = useAuth();

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
        <Link to="/" className="text-2xl md:text-3xl font-black tracking-tight text-primary">
          CineVerse
        </Link>
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
        {user ? (
          <div className="flex items-center gap-3">
            <Link to="/dashboard" className="w-8 h-8 rounded-md bg-primary flex items-center justify-center hover:bg-primary/85 transition-colors">
              <User className="w-4 h-4 text-primary-foreground" />
            </Link>
            <button onClick={signOut} className="text-foreground/60 hover:text-foreground transition-colors">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="text-sm font-semibold bg-primary text-primary-foreground px-4 py-1.5 rounded-md hover:bg-primary/85 transition-colors"
          >
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
