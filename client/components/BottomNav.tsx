import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Gamepad2,
  Trophy,
  Coins,
  User,
} from "lucide-react";

export const BottomNav = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/play", icon: Gamepad2, label: "Play" },
    { path: "/leaderboard", icon: Trophy, label: "Leaderboard" },
    { path: "/wallet", icon: Coins, label: "Wallet" },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 mx-auto max-w-md bg-card border-t border-border">
      <div className="flex items-center justify-around">
        {navItems.map(({ path, icon: Icon, label }) => (
          <Link
            key={path}
            to={path}
            className={`flex-1 flex flex-col items-center justify-center py-3 transition-colors ${
              isActive(path)
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Icon className="w-6 h-6 mb-1" />
            <span className="text-xs font-semibold">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};
