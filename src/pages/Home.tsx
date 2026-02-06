import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Clock, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  const services = [
    {
      icon: Scissors,
      title: "Precision Haircut",
      description: "Expert cuts tailored to your style and face shape",
      price: "$45",
    },
    {
      icon: Users,
      title: "Beard Sculpting",
      description: "Professional beard trimming and shaping",
      price: "$30",
    },
    {
      icon: Award,
      title: "Hot Towel Shave",
      description: "Traditional straight razor shave experience",
      price: "$40",
    },
    {
      icon: Clock,
      title: "Full Grooming",
      description: "Complete package with haircut, beard, and shave",
      price: "$85",
    },
  ];

  const stats = [
    { number: "10K+", label: "Happy Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "5-Star", label: "Rated Service" },
    { number: "100%", label: "Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-7xl mb-6 tracking-tight animate-fade-in">
              Elevate Your Style
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Experience premium grooming in a modern, professional environment.
              Where tradition meets contemporary style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" className="text-base">
                <Link to="/booking">Book Your Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl md:text-5xl mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Precision cuts, expert styling, and premium grooming services
              delivered by skilled professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <div className="text-2xl font-display">{service.price}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/booking">Schedule Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-secondary text-secondary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Ready for a Fresh Look?
          </h2>
          <p className="text-lg mb-8 text-secondary-foreground/80 max-w-2xl mx-auto">
            Book your appointment today and experience the Max Mood difference.
            Walk in looking good, walk out feeling great.
          </p>
          <Button asChild size="lg" variant="default" className="bg-background text-foreground hover:bg-background/90">
            <Link to="/booking">Book Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
