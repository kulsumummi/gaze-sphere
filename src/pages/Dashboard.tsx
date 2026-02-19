import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { LogOut, Film, User } from "lucide-react";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="flex items-center justify-between px-6 md:px-12 py-4 border-b border-border">
        <span className="text-2xl font-black text-primary">CineVerse</span>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <User className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-sm text-foreground hidden md:block">{user?.email}</span>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </header>

      <main className="px-6 md:px-12 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back!</h1>
        <p className="text-muted-foreground mb-10">
          You're signed in as {user?.email}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card rounded-xl p-6 border border-border">
            <Film className="w-8 h-8 text-primary mb-3" />
            <h2 className="text-lg font-semibold text-foreground mb-1">My Watchlist</h2>
            <p className="text-sm text-muted-foreground">Save movies to watch later</p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border">
            <User className="w-8 h-8 text-primary mb-3" />
            <h2 className="text-lg font-semibold text-foreground mb-1">Profile Settings</h2>
            <p className="text-sm text-muted-foreground">Manage your account</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
