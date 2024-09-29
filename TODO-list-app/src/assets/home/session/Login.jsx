/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Swal from 'sweetalert2'
import ImagenPerfil from '../../images/perfil.jpg'
//Importanto firebase
import appFirebase from '../../firebase/config'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(appFirebase)


const Login = () => {
  
  const [registrandro, setRegistrando] = useState(false)

  const funAutenticacion = async(e) =>{
    e.preventDefault()
    const correo = e.target.email.value;
    const contraseña = e.target.password.value
    
    if (registrandro) {
      try {
        await createUserWithEmailAndPassword(auth, correo, contraseña)
      } catch (error) {
        Swal.fire({
          text: "Asegurese que la contraseña tenga 8 digitos",
          icon: "error"
        });
      }
      
    }
    else{
      try {
        await signInWithEmailAndPassword(auth, correo, contraseña)
      } catch (error) {
        Swal.fire({
          text: "El correo o contraseña son incorrectos",
          icon: "error"
        });
        
      }
      
    }
    
  }
  
  return (
    <>
    <h1 className='text-center mt-3'>Lista de Tareas</h1>
     <div className="container d-flex justify-content-center align-items-center">
      <div className='mt-5'>
          <div className="padre">
            <div className="card card-body shadow-lg">
              <img src={ImagenPerfil} alt="perfilimg" className='estilo-profile' />
              <form onSubmit={funAutenticacion}>
                <input type="text" placeholder='Ingresa tu correo electronico' className='cajatexto' id='email'/>
                <input type="password" placeholder='Ingresa tu contraseña' className='cajatexto' id='password'/>
                <button className='btnform'>{registrandro ? 'Registrate' : 'Iniciar sesion'}</button>
              </form>
              <h4 className='texto'>{registrandro ? 'Si ya tienes cuenta' : 'No tienes cuenta'}<button className='btnswitch mx-2' onClick={() => setRegistrando(!registrandro)}>{registrandro ? 'Inicia sesion' : 'Registrate'}</button></h4>
            </div>
          </div>
      </div>
    </div>
    </>
   
  )
}

export default Login