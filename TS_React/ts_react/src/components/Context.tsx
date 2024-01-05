import { useContext } from "react"
import { AppContext } from "../App"

const Context = () => {

   const details = useContext(AppContext)
  return (
    <div>
     {details && (
        <>
            <h4>Language: {details.language}</h4>
            <h4>Framework: {details.framework}</h4>
            <h4>Quantidade de projetos: {details.projects}</h4>
        </>

     )}
    </div>
  )
}

export default Context