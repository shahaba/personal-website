import { NextUIProvider } from "@nextui-org/react";
import { BackgroundBeams } from "./components/ui/background-beams";
import Hero from "./components/hero";
import Nav from "./components/nav";


function App() {
  return (
    <NextUIProvider>
      <BackgroundBeams />
        <Nav />
      <div>
        <section>
          <Hero />
        </section>
      </div>
    </NextUIProvider>
  )
}

export default App
