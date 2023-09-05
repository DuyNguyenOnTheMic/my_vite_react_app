import 'bootstrap/dist/css/bootstrap.min.css'
import { Fragment } from 'react'
import './App.css'
import Banner from './components/Banner'
import NavBar from './components/NavBar'
import Skills from './components/Skills'

function App() {
  return (
    <Fragment>
      <NavBar />
      <Banner />
      <Skills />
    </Fragment>
  )
}

export default App
