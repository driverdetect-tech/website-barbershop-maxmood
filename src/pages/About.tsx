import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const team = [
    {
      name: "Mike Johnson",
      role: "Master Barber & Owner",
      experience: "15+ years",
    },
    {
      name: "Alex Rodriguez",
      role: "Senior Barber",
      experience: "10+ years",
    },
    {
      name: "James Wilson",
      role: "Barber Stylist",
      experience: "8+ years",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every cut, every shave, every time.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building lasting relationships with our clients and community.",
    },
    {
      icon: Clock,
      title: "Tradition",
      description: "Honoring classic barbering techniques while embracing modern style.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Staying ahead of trends and continuously improving our craft.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl mb-6">About Max Mood</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Where craftsmanship meets modern style. We're more than a barbershop—
              we're a destination for the modern gentleman.
            </p>
          </div>

          {/* Story Section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-4xl mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2010, Max Mood Barbershop was born from a passion for
                    traditional barbering and a vision to create a modern sanctuary for
                    men's grooming.
                  </p>
                  <p>
                    Our founder, Mike Johnson, trained under master barbers in New York
                    and London, bringing together the best of classic technique and
                    contemporary style. Today, we serve thousands of clients who trust
                    us with their image and style.
                  </p>
                  <p>
                    Every haircut, every shave, every detail is crafted with precision
                    and care. We believe that grooming is not just about looking good—
                    it's about feeling confident and ready to take on the world.
                  </p>
                </div>
              </div>

              <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="font-display text-6xl mb-4">15+</div>
                  <div className="text-xl text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl mb-4">Meet the Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Skilled professionals dedicated to your perfect look
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                      <Users className="h-16 w-16 text-muted-foreground" />
                    </div>
                    <h3 className="font-display text-xl mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                    <p className="text-sm font-medium">{member.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
