import './App.css'
import FirstComponent from './components/FirstComponent'

function App() {

  const name: string = "Allan"
  const age: number = 23
  const isWorking: boolean = true

  const userGreeting = (name: string): string => {
    return `Olá ${name}`
  }

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
     <h3>{userGreeting(name)}</h3>
     <FirstComponent/>
    </>
  )
}

export default App
