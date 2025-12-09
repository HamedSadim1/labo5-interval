import Header from "./components/Header";
import DashboardGrid from "./components/DashboardGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-cyan-400 via-blue-500 to-purple-600">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-size-[20px_20px]"></div>
      <div className="relative max-w-7xl mx-auto p-8">
        <Header />
        <DashboardGrid />
        <Footer />
      </div>
    </div>
  );
}

export default App;
