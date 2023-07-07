
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import NavBar from './components/Navbar/Navbar'
import Project from './components/Project'

function App() {


  return (
    <>
      <div className='bg-gray-500'>
        <Header></Header>
        <About></About>
        <Experience></Experience>
        <Project></Project>
        <Contact></Contact>
        <NavBar></NavBar>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
