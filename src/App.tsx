import 'bootstrap/dist/css/bootstrap.min.css'
import { Fragment } from 'react'
import './App.css'
import Banner from './components/Banner'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <Fragment>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </Fragment>
  )
}

export default App
