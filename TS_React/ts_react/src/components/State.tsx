import { ChangeEvent, useState } from "react"

const State = () => {
 
   const [text,setText] = useState<string | null>(null)
  
   // ChangeEvent --> tipos de evento vindos de input
   // HTMLInputElement --> Qual elemento HTML recebe a alteração
   const handleChange = (e: ChangeEvent<HTMLInputElement>) => [
     setText(e.target.value)
   ]
  return (
    <div>
        <form>
            <h3>{text}</h3>
            <input type="text" onChange={handleChange}/>
        </form>
    </div>
  )
}

export default State