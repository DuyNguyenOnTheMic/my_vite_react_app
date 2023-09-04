import 'bootstrap/dist/css/bootstrap.min.css'
import { Fragment } from 'react'
import './App.css'
import Banner from './components/Banner'
import NavBar from './components/NavBar'

function App() {
  return (
    <Fragment>
      <NavBar />
      <Banner />
    </Fragment>
  )
}

export default App
