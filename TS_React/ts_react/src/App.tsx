import './App.css'
import FirstComponent from './components/FirstComponent'
import Post from './components/Post'
import State from './components/State'

function App() {

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

     <Post title={title} content={content} amountComments={amountComments} tags={tags} />
     <hr/>

     <State/>
     <hr/>

    </>
  )
}

export default App
