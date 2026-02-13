import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AppLayout } from "@/components/AppLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <AppLayout>
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <div className="text-7xl mb-4">404</div>
        <h1 className="text-3xl font-black text-primary mb-2">
          Page Not Found
        </h1>
        <p className="text-muted-foreground text-center max-w-xs mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="bg-primary hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </AppLayout>
  );
};

export default NotFound;
