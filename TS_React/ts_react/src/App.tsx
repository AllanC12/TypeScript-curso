import './App.css'
import FirstComponent from './components/FirstComponent'
import Post, {Category} from './components/Post'
import State from './components/State'
import { useState,createContext } from 'react'
import Context from './components/Context'

type textOrNull = string | null

//Padrão para tipos de context =  I + nome do componenten + Context
interface IAppContext {
  language: string,
  framework: string,
  projects: number
}


export const AppContext = createContext<IAppContext | null>(null)

function App() {

  const contextValue: IAppContext = {
    language: "Javascript",
    framework: "Node JS",
    projects: 2,
  }

  
  const [stateNull] = useState<textOrNull>("State tipado com type")
  const variable: textOrNull = "texto"

  const name: string = "Allan"
  const age: number = 23
  const isWorking: boolean = true

  const userGreeting = (name: string): string => {
    return `Olá ${name}`
  }


  const contentPost = {
    title: "Título do post",
    content: "Contúdo do post",
    amountComments: 100,
    tags: ["js","ts","programming"]
  }

  const {title,content,amountComments,tags} = contentPost

  return (
    <>
     <AppContext.Provider value={contextValue}>
     <h1>Typescript com React</h1>
     <h3>Nome: {name}</h3>
     <h3>Idade: {age}</h3>
     {isWorking ? (
      <h3>Está trabalhando: Sim</h3>
     ) : (
       <h3>Está trabalhando: Não</h3>
     )}
      <hr/>

     <h3>{userGreeting(name)}</h3>
     <hr/>

     <FirstComponent />
     <hr/>

     <Post category={Category.JS} title={title} content={content} amountComments={amountComments} tags={tags} />
     <Post category={Category.P} title={title} content={content} amountComments={amountComments} tags={tags} />
     <hr/>

     <State/>

     <h4>Variavel tipada com type: {variable}</h4>
     <h4>State tipado com type: {stateNull}</h4>
     <hr/>

     <Context/>
     </AppContext.Provider>
    </>
  )
}

export default App
