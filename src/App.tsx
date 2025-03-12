import { Toaster } from "@/components/ui/sonner";
import LandingPage from "@/pages/LandingPage";

function App() {
  return (
    <div className="container mx-auto p-4">
      <LandingPage />
      <Toaster 
      position="top-right"
      expand={true}
      richColors  
      />
    </div>
  );
}

export default App;
