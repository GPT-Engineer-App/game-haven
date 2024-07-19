import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-white">
        <img src="/placeholder.svg" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to GameZone</h1>
          <p className="text-xl mb-8">Your ultimate destination for gaming excitement!</p>
          <Button size="lg">Play Now</Button>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((game) => (
            <Card key={game}>
              <CardHeader>
                <CardTitle>Game Title {game}</CardTitle>
                <CardDescription>A brief description of the game</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="/placeholder.svg" alt={`Game ${game}`} className="w-full h-48 object-cover rounded-md" />
              </CardContent>
              <CardFooter>
                <Button className="w-full">Play Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-gray-100 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Latest News</h2>
        <div className="space-y-8">
          {[1, 2, 3].map((news) => (
            <Card key={news} className="flex flex-col md:flex-row">
              <img src="/placeholder.svg" alt={`News ${news}`} className="w-full md:w-1/3 h-48 object-cover rounded-l-md" />
              <div className="p-4">
                <CardTitle>News Title {news}</CardTitle>
                <CardDescription className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </CardDescription>
                <Button variant="link" className="mt-4">Read More</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Join the Community</h2>
        <p className="mb-8">Connect with gamers, share your experiences, and stay updated with the latest gaming trends!</p>
        <Button size="lg">Join Now</Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 GameZone. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="h-5 w-5" />
            </Button>
          </div>
          <div className="mt-4 md:mt-0">
            <Button variant="link" className="text-white">Privacy Policy</Button>
            <Button variant="link" className="text-white">Terms of Service</Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;