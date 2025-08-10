import { Navbar } from "@/components/navigation/navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="text-center">
          <h1 className="text-2xl font-medium text-foreground">blank project</h1>
        </div>
      </main>
    </div>
  );
};

export default Index;
