import Header from "./components/Header";
import DashboardGrid from "./components/DashboardGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 sm:py-14">
        <Header />
        <DashboardGrid />
        <Footer />
      </div>
    </div>
  );
}

export default App;
