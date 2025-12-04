import { useNavigate } from "react-router-dom"

export default function Home(){
     let navigate=useNavigate();
     function goContact(){
          navigate('/Contact')
     }
     return (
          <>
               <h2>Welcome to the Home</h2>
               <button onClick={goContact}>Click me </button><br />
          </>
     )
}