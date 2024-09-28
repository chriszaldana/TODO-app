/* eslint-disable react/prop-types */
import appFirebase from "../../firebase/config"
import { getAuth, signOut } from "firebase/auth"
const auth = getAuth(appFirebase)

const Home = ({correoUsuario}) => {
  return (
    <div className="text-center">Bienvenido {correoUsuario} <button onClick={() => signOut(auth)} className="btn btn-primary">Log out</button></div>
  )
}

export default Home