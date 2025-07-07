import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-soft font-poppins px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="w-24 h-24 bg-gradient-caring rounded-full flex items-center justify-center mx-auto mb-6">
          <Heart className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Oops! This page couldn't be found
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          Let's get you back to where you can find the care you need.
        </p>
        <Button 
          asChild
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
