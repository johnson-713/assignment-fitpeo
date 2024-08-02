import "./App.css";
import { AppContainer } from "./components/AppContainer";
import { Dashboard } from "./components/Dashboard";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <AppContainer>
        <Dashboard />
      </AppContainer>
    </>
  );
}

export default App;
