import { useParams } from "react-router-dom";

export default function Profile(){
     let {userId,nom}=useParams();
     return(
          <>
               <h2>Profile page de {userId} ayant le nom : {nom}</h2>
          </>
     );
}