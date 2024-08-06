import "./App.css";
import { AppContainer } from "./components/AppContainer";
import { Dashboard } from "./components/Dashboard";
import MobileNavbar from "./components/MobileNavbar";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <Sidebar />
      <AppContainer>
        <Dashboard />
      </AppContainer>
    </>
  );
}

export default App;
