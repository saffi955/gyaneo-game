import { AppLayout } from "./AppLayout";

interface PlaceholderPageProps {
  title: string;
  emoji: string;
  description: string;
}

export const PlaceholderPage = ({
  title,
  emoji,
  description,
}: PlaceholderPageProps) => {
  return (
    <AppLayout>
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <div className="text-6xl mb-4">{emoji}</div>
        <h1 className="text-3xl font-black text-primary mb-2">{title}</h1>
        <p className="text-muted-foreground text-center max-w-xs mb-6">
          {description}
        </p>
        <p className="text-xs text-muted-foreground text-center">
          Coming soon! This page is being built with love.
        </p>
      </div>
    </AppLayout>
  );
};
