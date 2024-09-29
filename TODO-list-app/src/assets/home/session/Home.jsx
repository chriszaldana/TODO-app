/* eslint-disable react/prop-types */
import appFirebase from "../../firebase/config"
import { getAuth, signOut } from "firebase/auth"
import ToDoList from "../TODOList/ToDoList"
const auth = getAuth(appFirebase)

const Home = ({correoUsuario}) => {
  return (
    <>
    <div className="container">
      <div className="text-center mt-5 mb-5">Bienvenido {correoUsuario}</div>
      <ToDoList />
      <button onClick={() => signOut(auth)} className="btn btn-primary">Log out</button>
    </div>
    

    </>
    
  )
}

export default Home