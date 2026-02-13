import { AppLayout } from "@/components/AppLayout";
import { Coins, TrendingUp, Gift, ArrowUp, ArrowDown } from "lucide-react";

interface Transaction {
  id: string;
  type: "earn" | "gift" | "redeem" | "bonus";
  description: string;
  amount: number;
  date: string;
  icon: string;
}

interface RedeemOption {
  id: string;
  name: string;
  requiredCoins: number;
  value: string;
  emoji: string;
}

const transactions: Transaction[] = [
  {
    id: "1",
    type: "earn",
    description: "Quiz Completed - Bollywood",
    amount: 80,
    date: "Today",
    icon: "🎬",
  },
  {
    id: "2",
    type: "bonus",
    description: "Daily Login Bonus",
    amount: 50,
    date: "Today",
    icon: "🎁",
  },
  {
    id: "3",
    type: "earn",
    description: "Quiz Completed - Cricket",
    amount: 105,
    date: "Yesterday",
    icon: "🏏",
  },
  {
    id: "4",
    type: "gift",
    description: "Gift from Quiz Master",
    amount: 200,
    date: "2 days ago",
    icon: "💝",
  },
  {
    id: "5",
    type: "earn",
    description: "Quiz Completed - GK",
    amount: 108,
    date: "3 days ago",
    icon: "🧠",
  },
];

const redeemOptions: RedeemOption[] = [
  {
    id: "1",
    name: "Amazon ₹100",
    requiredCoins: 1000,
    value: "₹100",
    emoji: "🛒",
  },
  {
    id: "2",
    name: "Google Play ₹500",
    requiredCoins: 5000,
    value: "₹500",
    emoji: "🎮",
  },
  {
    id: "3",
    name: "Paytm Cash ₹100",
    requiredCoins: 1000,
    value: "₹100",
    emoji: "📱",
  },
  {
    id: "4",
    name: "Netflix 1 Month",
    requiredCoins: 2500,
    value: "1 Month",
    emoji: "🎬",
  },
];

export default function Wallet() {
  return (
    <AppLayout>
      <div className="space-y-6 pt-4">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-black text-primary mb-1 flex items-center gap-2">
            <Coins className="w-8 h-8" />
            Wallet
          </h1>
        </div>

        {/* Coin Balance Card */}
        <div className="bg-gradient-to-br from-accent via-yellow-500 to-yellow-600 rounded-2xl p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -mr-12 -mt-12"></div>
          <div className="relative z-10">
            <p className="text-sm font-semibold text-yellow-900/70 mb-3">
              Available Balance
            </p>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-5xl font-black text-yellow-900">2,450</span>
              <Coins className="w-8 h-8 text-yellow-700" />
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Earn More
              </button>
              <button className="flex-1 bg-yellow-700/50 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                <Gift className="w-4 h-4" />
                Gift
              </button>
            </div>
          </div>
        </div>

        {/* Redeem Options */}
        <div>
          <h2 className="text-lg font-bold text-foreground mb-3">
            Redeem Prizes
          </h2>
          <div className="space-y-2">
            {redeemOptions.map((option) => (
              <button
                key={option.id}
                className="w-full bg-card border border-border rounded-lg p-4 hover:border-accent hover:bg-card/80 transition-all active:scale-95 flex items-center justify-between"
              >
                <div className="flex items-center gap-3 flex-1 text-left">
                  <p className="text-3xl">{option.emoji}</p>
                  <div>
                    <p className="font-bold text-sm text-foreground">
                      {option.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {option.value}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-accent">
                    {option.requiredCoins.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground">coins</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div>
          <h2 className="text-lg font-bold text-foreground mb-3">
            Recent Activity
          </h2>
          <div className="space-y-2">
            {transactions.map((tx) => (
              <div
                key={tx.id}
                className="bg-card border border-border rounded-lg p-3 flex items-center justify-between hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-lg">
                    {tx.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-foreground">
                      {tx.description}
                    </p>
                    <p className="text-xs text-muted-foreground">{tx.date}</p>
                  </div>
                </div>
                <div
                  className={`flex items-center gap-1 font-bold ${
                    tx.type === "redeem"
                      ? "text-red-400"
                      : "text-accent"
                  }`}
                >
                  {tx.type === "redeem" ? (
                    <ArrowDown className="w-4 h-4" />
                  ) : (
                    <ArrowUp className="w-4 h-4" />
                  )}
                  {tx.type === "redeem" ? "-" : "+"}
                  {tx.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
