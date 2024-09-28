
import '../src/assets/css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Login from './assets/home/session/Login'

//Importando los modulos de firebase
import appFirebase from './assets/firebase/config'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { useState } from 'react'
import Home from './assets/home/session/Home'
//onAuthStateChanged nos sirve para saber si un usuario esta logueado o no
const auth = getAuth(appFirebase)

function App() {
  
const [usuario, setUsuario] = useState(null)

onAuthStateChanged(auth,(usuarioFirebase) =>{
  if (usuarioFirebase) {
    setUsuario(usuarioFirebase)
  }
  else{
    setUsuario(null)
  }
})

  return (
    <>
      {usuario ? <Home correoUsuario = {usuario.email} /> : <Login />}
      
    </>
  )
}

export default App
