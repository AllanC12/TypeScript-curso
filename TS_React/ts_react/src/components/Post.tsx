// Enum usa operador de atribuição nas suas chaves  =   
// Estamos usando como prop nesse proprio componente, por isso exportamos
export enum Category {
  TS = "Typescript",
  JS = "JavaScript",
  P = "Python"
}

interface Props {
    title: string,
    content: string,
    amountComments: number
    tags: string[],
    category: Category
}

const Post = ({title,content,amountComments,tags,category}: Props) => {
  return (
    <div>
     <p>Título: {title}</p>
     <p>conteúdo: {content}</p>
     <p>Quantidade de comentários: {amountComments}</p>
      {tags.map((tag,index) => (
        <span key={index}>#{tag} </span>
      ))}
      <h3>Categoria: {category}</h3>
    </div>
  )
}

export default Post