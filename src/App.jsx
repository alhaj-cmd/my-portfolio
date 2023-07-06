
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import NavBar from './components/Navbar/Navbar'

function App() {


  return (
    <>
      <div>
        <Header></Header>
        <About></About>
        <Experience></Experience>
        <NavBar></NavBar>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
