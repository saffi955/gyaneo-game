import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { Trophy, Flame } from "lucide-react";

interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
  coins: number;
  avatar: string;
  isCurrentUser?: boolean;
}

const leaderboardData: LeaderboardEntry[] = [
  {
    rank: 1,
    name: "Quiz Master",
    score: 4850,
    coins: 12500,
    avatar: "👑",
    isCurrentUser: false,
  },
  {
    rank: 2,
    name: "Brain Storm",
    score: 4320,
    coins: 9800,
    avatar: "🧠",
    isCurrentUser: false,
  },
  {
    rank: 3,
    name: "GK Legend",
    score: 3950,
    coins: 8200,
    avatar: "📚",
    isCurrentUser: false,
  },
  {
    rank: 4,
    name: "You",
    score: 3650,
    coins: 2450,
    avatar: "🎮",
    isCurrentUser: true,
  },
  {
    rank: 5,
    name: "Movie Buff",
    score: 3480,
    coins: 6500,
    avatar: "🎬",
    isCurrentUser: false,
  },
  {
    rank: 6,
    name: "Sports Fan",
    score: 3200,
    coins: 5200,
    avatar: "⚽",
    isCurrentUser: false,
  },
  {
    rank: 7,
    name: "History Nerd",
    score: 2950,
    coins: 4100,
    avatar: "🏛️",
    isCurrentUser: false,
  },
  {
    rank: 8,
    name: "Tech Guru",
    score: 2710,
    coins: 3900,
    avatar: "💻",
    isCurrentUser: false,
  },
];

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState<"weekly" | "monthly">("weekly");

  const podium = leaderboardData.slice(0, 3);
  const otherPlayers = leaderboardData.slice(3);

  return (
    <AppLayout>
      <div className="space-y-6 pt-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-black text-primary flex items-center gap-2">
            <Trophy className="w-8 h-8" />
            Leaderboard
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("weekly")}
            className={`flex-1 py-2 px-4 rounded-lg font-bold transition-colors ${
              activeTab === "weekly"
                ? "bg-primary text-white"
                : "bg-card text-muted-foreground"
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setActiveTab("monthly")}
            className={`flex-1 py-2 px-4 rounded-lg font-bold transition-colors ${
              activeTab === "monthly"
                ? "bg-primary text-white"
                : "bg-card text-muted-foreground"
            }`}
          >
            Monthly
          </button>
        </div>

        {/* Podium */}
        <div className="flex items-end justify-center gap-4 mb-4">
          {/* 2nd Place */}
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-2">{podium[1].avatar}</div>
            <div className="bg-gradient-to-b from-slate-400 to-slate-500 rounded-lg p-4 text-center w-24 h-32 flex flex-col items-center justify-center">
              <p className="text-sm font-black text-white">2ND</p>
              <p className="text-xs text-white/80 font-bold mt-1">
                {podium[1].name}
              </p>
              <p className="text-lg font-black text-white mt-auto">
                {podium[1].score.toLocaleString()}
              </p>
            </div>
          </div>

          {/* 1st Place */}
          <div className="flex flex-col items-center -mb-4">
            <div className="text-6xl mb-2">{podium[0].avatar}</div>
            <div className="bg-gradient-to-b from-accent to-yellow-600 rounded-lg p-4 text-center w-24 h-40 flex flex-col items-center justify-center shadow-xl relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-2xl">
                👑
              </div>
              <p className="text-sm font-black text-yellow-900">1ST</p>
              <p className="text-xs text-yellow-900/90 font-bold mt-1">
                {podium[0].name}
              </p>
              <p className="text-2xl font-black text-yellow-900 mt-auto">
                {podium[0].score.toLocaleString()}
              </p>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-2">{podium[2].avatar}</div>
            <div className="bg-gradient-to-b from-orange-700 to-orange-800 rounded-lg p-4 text-center w-24 h-28 flex flex-col items-center justify-center">
              <p className="text-sm font-black text-white">3RD</p>
              <p className="text-xs text-white/80 font-bold mt-1">
                {podium[2].name}
              </p>
              <p className="text-lg font-black text-white mt-auto">
                {podium[2].score.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Prize Pool */}
        <div className="bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/40 rounded-xl p-3 flex justify-around text-center">
          <div>
            <p className="text-xs text-muted-foreground">1st Prize</p>
            <p className="font-black text-accent">₹1000</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">2nd Prize</p>
            <p className="font-black text-primary">₹500</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">3rd Prize</p>
            <p className="font-black text-orange-400">₹200</p>
          </div>
        </div>

        {/* Other Players */}
        <div className="space-y-2">
          <p className="text-xs font-bold text-muted-foreground uppercase">
            Leaderboard
          </p>
          {otherPlayers.map((player) => (
            <div
              key={player.rank}
              className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                player.isCurrentUser
                  ? "bg-primary/20 border border-primary/40"
                  : "bg-card border border-border hover:border-primary/30"
              }`}
            >
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-lg font-bold">
                  {player.avatar}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm">{player.name}</p>
                  <p className="text-xs text-muted-foreground">
                    Rank #{player.rank}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm text-primary">
                  {player.score.toLocaleString()}
                </p>
                <p className="text-xs text-accent flex items-center gap-1 justify-end">
                  +{player.coins}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
