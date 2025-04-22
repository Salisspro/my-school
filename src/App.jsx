import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Page from "./components/Page"
import User from "./components/User"

function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Page />
      <User/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default App