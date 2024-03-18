import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { BackgroundBeams } from "./components/ui/background-beams";
// import Projects from "./components/projects";
// import Experiences from "./components/experience";
// import About from "./components/about";
import Hero from "./components/hero";
import Nav from "./components/nav";


function App() {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
      <BackgroundBeams />
        <Nav />
      <div>
        <section>
          <Hero />
        </section>
      </div>
      </NextThemesProvider>
    </NextUIProvider>
  )
}

export default App
