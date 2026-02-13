import { AppLayout } from "@/components/AppLayout";
import { Clock, Zap, Users, TrendingUp } from "lucide-react";

interface QuizCategory {
  id: string;
  name: string;
  emoji: string;
  totalQuestions: number;
  reward: number;
  difficulty: "Easy" | "Medium" | "Hard";
  players: number;
}

interface RecentQuiz {
  id: string;
  category: string;
  emoji: string;
  date: string;
  score: number;
  maxScore: number;
  reward: number;
}

const quizCategories: QuizCategory[] = [
  {
    id: "bollywood",
    name: "Bollywood",
    emoji: "🎬",
    totalQuestions: 10,
    reward: 100,
    difficulty: "Easy",
    players: 2341,
  },
  {
    id: "cricket",
    name: "Cricket",
    emoji: "🏏",
    totalQuestions: 10,
    reward: 150,
    difficulty: "Medium",
    players: 5612,
  },
  {
    id: "gk",
    name: "General Knowledge",
    emoji: "🧠",
    totalQuestions: 10,
    reward: 120,
    difficulty: "Medium",
    players: 3401,
  },
  {
    id: "sports",
    name: "Sports",
    emoji: "⚽",
    totalQuestions: 10,
    reward: 140,
    difficulty: "Medium",
    players: 2987,
  },
  {
    id: "history",
    name: "History",
    emoji: "🏛️",
    totalQuestions: 10,
    reward: 130,
    difficulty: "Hard",
    players: 1823,
  },
  {
    id: "tech",
    name: "Technology",
    emoji: "💻",
    totalQuestions: 10,
    reward: 160,
    difficulty: "Hard",
    players: 2156,
  },
];

const recentQuizzes: RecentQuiz[] = [
  {
    id: "1",
    category: "Bollywood",
    emoji: "🎬",
    date: "Today",
    score: 8,
    maxScore: 10,
    reward: 80,
  },
  {
    id: "2",
    category: "Cricket",
    emoji: "🏏",
    date: "Yesterday",
    score: 7,
    maxScore: 10,
    reward: 105,
  },
  {
    id: "3",
    category: "General Knowledge",
    emoji: "🧠",
    date: "2 days ago",
    score: 9,
    maxScore: 10,
    reward: 108,
  },
  {
    id: "4",
    category: "Sports",
    emoji: "⚽",
    date: "3 days ago",
    score: 6,
    maxScore: 10,
    reward: 84,
  },
];

export default function Play() {
  return (
    <AppLayout>
      <div className="space-y-6 pt-4">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-black text-primary mb-1">Quiz Time</h1>
          <p className="text-sm text-muted-foreground">
            Pick a category and test your knowledge
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-card rounded-lg p-3 text-center border border-border">
            <p className="text-2xl mb-1">🔥</p>
            <p className="text-xs text-muted-foreground">Streak</p>
            <p className="font-bold text-primary">12</p>
          </div>
          <div className="bg-card rounded-lg p-3 text-center border border-border">
            <p className="text-2xl mb-1">🎯</p>
            <p className="text-xs text-muted-foreground">Accuracy</p>
            <p className="font-bold text-primary">78%</p>
          </div>
          <div className="bg-card rounded-lg p-3 text-center border border-border">
            <p className="text-2xl mb-1">⭐</p>
            <p className="text-xs text-muted-foreground">Level</p>
            <p className="font-bold text-primary">12</p>
          </div>
        </div>

        {/* Quiz Categories */}
        <div>
          <h2 className="text-lg font-bold text-foreground mb-3">
            Categories
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {quizCategories.map((category) => (
              <button
                key={category.id}
                className="bg-card border border-border rounded-lg p-4 hover:border-primary hover:bg-card/80 transition-all active:scale-95 text-left"
              >
                <p className="text-3xl mb-2">{category.emoji}</p>
                <p className="font-bold text-sm text-foreground">
                  {category.name}
                </p>
                <div className="space-y-1 mt-2">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {category.totalQuestions} Q
                  </div>
                  <div className="flex items-center gap-1">
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded ${
                        category.difficulty === "Easy"
                          ? "bg-green-500/20 text-green-400"
                          : category.difficulty === "Medium"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {category.difficulty}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-accent">
                    +{category.reward} coins
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Quizzes */}
        <div>
          <h2 className="text-lg font-bold text-foreground mb-3">
            Recent Quizzes
          </h2>
          <div className="space-y-2">
            {recentQuizzes.map((quiz) => (
              <div
                key={quiz.id}
                className="bg-card border border-border rounded-lg p-3 flex items-center justify-between hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 flex-1">
                  <p className="text-2xl">{quiz.emoji}</p>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-foreground">
                      {quiz.category}
                    </p>
                    <p className="text-xs text-muted-foreground">{quiz.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm text-primary">
                    {quiz.score}/{quiz.maxScore}
                  </p>
                  <p className="text-xs text-accent">+{quiz.reward}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
