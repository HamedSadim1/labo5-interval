import { Header, DashboardGrid, Footer } from "./components/layout";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 sm:py-14">
        <Header />
        <main>
          <DashboardGrid />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
