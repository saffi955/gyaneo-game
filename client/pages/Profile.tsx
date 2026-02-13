import { AppLayout } from "@/components/AppLayout";
import { LogOut, Settings, Share2 } from "lucide-react";

interface Achievement {
  id: string;
  name: string;
  emoji: string;
  description: string;
  unlocked: boolean;
}

const achievements: Achievement[] = [
  {
    id: "1",
    name: "First Quiz",
    emoji: "🎯",
    description: "Complete your first quiz",
    unlocked: true,
  },
  {
    id: "2",
    name: "On Fire",
    emoji: "🔥",
    description: "7-day streak",
    unlocked: true,
  },
  {
    id: "3",
    name: "Perfect Score",
    emoji: "⭐",
    description: "Score 10/10 in a quiz",
    unlocked: true,
  },
  {
    id: "4",
    name: "Rich Player",
    emoji: "💎",
    description: "Earn 5000+ coins",
    unlocked: true,
  },
  {
    id: "5",
    name: "Quiz Master",
    emoji: "👑",
    description: "Rank in top 10",
    unlocked: false,
  },
  {
    id: "6",
    name: "Lucky Winner",
    emoji: "🎰",
    description: "Win a live quiz",
    unlocked: false,
  },
];

export default function Profile() {
  return (
    <AppLayout>
      <div className="space-y-6 pt-4">
        {/* User Info */}
        <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/40 rounded-2xl p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-yellow-600 flex items-center justify-center text-white font-bold text-2xl">
                RK
              </div>
              <div>
                <p className="text-2xl font-black text-foreground">
                  Rea KoS
                </p>
                <p className="text-sm text-muted-foreground">
                  @reakos_player
                </p>
                <p className="text-xs text-primary font-bold mt-1">
                  Level 12 • Rank #4
                </p>
              </div>
            </div>
            <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-card rounded-lg p-4 text-center border border-border">
            <p className="text-3xl mb-2">🎮</p>
            <p className="text-2xl font-black text-primary">127</p>
            <p className="text-xs text-muted-foreground mt-1">Quizzes Played</p>
          </div>
          <div className="bg-card rounded-lg p-4 text-center border border-border">
            <p className="text-3xl mb-2">🏆</p>
            <p className="text-2xl font-black text-accent">78%</p>
            <p className="text-xs text-muted-foreground mt-1">Win Rate</p>
          </div>
          <div className="bg-card rounded-lg p-4 text-center border border-border">
            <p className="text-3xl mb-2">⭐</p>
            <p className="text-2xl font-black text-primary">156</p>
            <p className="text-xs text-muted-foreground mt-1">Total Badges</p>
          </div>
        </div>

        {/* Category Stats */}
        <div>
          <h2 className="text-lg font-bold text-foreground mb-3">
            Category Mastery
          </h2>
          <div className="space-y-2">
            {[
              { name: "Bollywood", score: 92, emoji: "🎬" },
              { name: "Cricket", score: 85, emoji: "🏏" },
              { name: "General Knowledge", score: 78, emoji: "🧠" },
              { name: "History", score: 65, emoji: "🏛️" },
            ].map((category, idx) => (
              <div key={idx} className="bg-card rounded-lg p-3 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{category.emoji}</span>
                    <p className="font-bold text-sm">{category.name}</p>
                  </div>
                  <p className="font-bold text-sm text-primary">
                    {category.score}%
                  </p>
                </div>
                <div className="w-full bg-card/50 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-green-600 h-2 rounded-full"
                    style={{ width: `${category.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-lg font-bold text-foreground mb-3">
            Achievements
          </h2>
          <div className="grid grid-cols-3 gap-2">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`rounded-lg p-3 text-center transition-opacity ${
                  achievement.unlocked
                    ? "bg-card border border-primary/40"
                    : "bg-card/50 border border-border opacity-50"
                }`}
              >
                <p className="text-3xl mb-1">{achievement.emoji}</p>
                <p className="text-xs font-bold text-foreground">
                  {achievement.name}
                </p>
                {!achievement.unlocked && (
                  <p className="text-xs text-muted-foreground mt-1">Locked</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pb-4">
          <button className="w-full bg-card border border-border rounded-lg p-3 hover:border-primary hover:bg-card/80 transition-colors flex items-center justify-center gap-2 font-bold text-foreground">
            <Share2 className="w-5 h-5" />
            Share Profile
          </button>
          <button className="w-full bg-card border border-border rounded-lg p-3 hover:border-destructive hover:bg-destructive/10 transition-colors flex items-center justify-center gap-2 font-bold text-destructive">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>
    </AppLayout>
  );
}
