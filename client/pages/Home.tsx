import { Link } from "react-router-dom";
import { Coins, Flame, Users, Gift, Send, Play } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";

export default function Home() {
  return (
    <AppLayout>
      <div className="space-y-4 pt-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-black text-primary">Gyaneo</h1>
            <p className="text-xs text-muted-foreground">Quiz & Coins</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-yellow-600 flex items-center justify-center">
              <span className="text-white font-bold">RK</span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Level</p>
              <p className="text-lg font-bold text-primary">12</p>
            </div>
          </div>
        </div>

        {/* Daily Streak */}
        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-3 flex items-center gap-2 border border-orange-500/30">
          <Flame className="w-5 h-5 text-orange-500 flex-shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground">Daily Streak</p>
            <p className="font-bold text-foreground">12 Days 🔥</p>
          </div>
        </div>

        {/* Coin Balance Card */}
        <div className="bg-gradient-to-br from-accent via-yellow-500 to-yellow-600 rounded-2xl p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -mr-12 -mt-12"></div>
          <div className="relative z-10">
            <p className="text-sm font-semibold text-yellow-900/70 mb-1">
              Total Coins
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-yellow-900">2,450</span>
              <Coins className="w-8 h-8 text-yellow-700" />
            </div>
            <div className="flex gap-2 mt-4">
              <button className="flex-1 bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                + Earn
              </button>
              <button className="flex-1 bg-yellow-700/50 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                Redeem
              </button>
            </div>
          </div>
        </div>

        {/* Hero Button */}
        <button className="w-full bg-gradient-to-r from-primary to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black text-lg py-4 rounded-xl glow-md transition-all active:scale-95 shadow-lg">
          <Play className="inline-block w-6 h-6 mr-2 mb-0.5" />
          Start Quiz Now
        </button>

        {/* Quick Action Cards */}
        <div className="grid grid-cols-2 gap-3">
          {/* Live Quiz */}
          <Link
            to="/play"
            className="bg-card border border-border rounded-xl p-4 hover:border-primary hover:bg-card/80 transition-all active:scale-95"
          >
            <div className="text-3xl mb-2">⚡</div>
            <p className="font-bold text-sm">Live Quiz</p>
            <p className="text-xs text-muted-foreground">With Friend</p>
          </Link>

          {/* Leaderboard */}
          <Link
            to="/leaderboard"
            className="bg-card border border-border rounded-xl p-4 hover:border-primary hover:bg-card/80 transition-all active:scale-95"
          >
            <div className="text-3xl mb-2">🏆</div>
            <p className="font-bold text-sm">Leaderboard</p>
            <p className="text-xs text-muted-foreground">Top Players</p>
          </Link>

          {/* Refer & Earn */}
          <div className="bg-card border border-border rounded-xl p-4 hover:border-accent hover:bg-card/80 transition-all cursor-pointer">
            <div className="text-3xl mb-2">🎁</div>
            <p className="font-bold text-sm">Refer & Earn</p>
            <p className="text-xs text-accent font-semibold">+50 coins</p>
          </div>

          {/* Support */}
          <Link
            to="/support"
            className="bg-card border border-border rounded-xl p-4 hover:border-primary hover:bg-card/80 transition-all active:scale-95"
          >
            <div className="text-3xl mb-2">💬</div>
            <p className="font-bold text-sm">Support</p>
            <p className="text-xs text-muted-foreground">Help & FAQ</p>
          </Link>
        </div>

        {/* Banner */}
        <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/40 rounded-xl p-4 text-center">
          <p className="text-sm font-bold text-primary mb-1">
            🎉 Next Quiz in 2h 30m
          </p>
          <p className="text-xs text-muted-foreground">
            Huge prize pool: ₹10,000!
          </p>
        </div>
      </div>
    </AppLayout>
  );
}
