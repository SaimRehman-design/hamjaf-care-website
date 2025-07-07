import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Facebook, Instagram, Heart, MessageCircle, Brain, Video, Home } from "lucide-react";
import hamjafLogo from "@/assets/hamjaf-logo.png";
import heroBackground from "@/assets/hero-background.png";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-soft font-poppins">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-soft">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={hamjafLogo} 
              alt="HamJaf Therapy and Care Center" 
              className="h-14 w-14 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-foreground">HamJaf</h1>
              <p className="text-xs text-muted-foreground">Therapy & Care Center</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Supporting Communication with{" "}
            <span className="bg-gradient-therapy bg-clip-text text-transparent">
              Care and Expertise
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professional speech therapy services designed to help children and adults 
            improve their communication skills through personalized, evidence-based care.
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 rounded-full shadow-therapy transition-all hover:scale-105"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About HamJaf Therapy and Care Center
            </h2>
            <div className="w-24 h-1 bg-gradient-therapy mx-auto mb-8 rounded-full"></div>
          </div>
          
          <Card className="bg-card/60 backdrop-blur-sm shadow-soft border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-caring rounded-full flex items-center justify-center">
                    <Heart className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-lg text-foreground leading-relaxed">
                    HamJaf Therapy and Care Center is led by a certified speech therapist 
                    dedicated to helping children and adults improve communication through 
                    personalized, evidence-based care. We believe every individual deserves 
                    the opportunity to express themselves clearly and confidently.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Our approach combines professional expertise with genuine care, 
                    creating a supportive environment where growth and healing happen naturally.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-therapy mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive speech therapy services tailored to meet your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: MessageCircle,
                title: "Language Delay Therapy",
                description: "Supporting children and adults with language development delays through targeted interventions."
              },
              {
                icon: Heart,
                title: "Autism-related Communication",
                description: "Compassionate support for individuals with autism spectrum disorder communication needs."
              },
              {
                icon: Video,
                title: "Online Sessions",
                description: "Convenient virtual therapy sessions with the same quality care from home."
              },
              {
                icon: Brain,
                title: "Fluency/Stuttering Support",
                description: "Specialized techniques to improve speech fluency and reduce stuttering patterns."
              }
            ].map((service, index) => (
              <Card key={index} className="bg-card shadow-soft border-primary/10 hover:shadow-therapy transition-all hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-caring rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-therapy mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your communication journey? Contact us through your preferred method.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="mailto:hamjaf.therapycenter@gmail.com"
              className="block h-full"
            >
              <Card className="bg-card shadow-soft border-primary/20 hover:shadow-therapy transition-all hover:scale-105 cursor-pointer h-full">
                <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Email Us</h3>
                  <p className="text-muted-foreground">Send us a message</p>
                </CardContent>
              </Card>
            </a>

            <a 
              href="https://www.facebook.com/share/1Fnp9RnNrn/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block h-full"
            >
              <Card className="bg-card shadow-soft border-secondary/20 hover:shadow-therapy transition-all hover:scale-105 cursor-pointer h-full">
                <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Facebook className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Facebook</h3>
                  <p className="text-muted-foreground">Follow our updates</p>
                </CardContent>
              </Card>
            </a>

            <a 
              href="https://www.instagram.com/hamjaf.therapycenter/#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block h-full"
            >
              <Card className="bg-card shadow-soft border-accent/20 hover:shadow-therapy transition-all hover:scale-105 cursor-pointer h-full">
                <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Instagram className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Instagram</h3>
                  <p className="text-muted-foreground">See our community</p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src={hamjafLogo} 
              alt="HamJaf Therapy and Care Center" 
              className="h-10 w-10 object-contain"
            />
            <span className="text-foreground font-semibold">HamJaf Therapy and Care Center</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 HamJaf Therapy and Care Center. Supporting communication with care and expertise.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;