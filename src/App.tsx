import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BackgroundElements from "./components/BackgroundElements";

export default function App() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <BackgroundElements />
      <Navbar />
      <Hero />
    </div>
  );
}
