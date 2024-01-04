
interface Props {
    title: string,
    content: string,
    amountComments: number
    tags: string[]
}
const Post = ({title,content,amountComments,tags}: Props) => {
  return (
    <div>
     <p>Título: {title}</p>
     <p>conteúdo: {content}</p>
     <p>Quantidade de comentários: {amountComments}</p>
      {tags.map((tag,index) => (
        <span key={index}>#{tag} </span>
      ))}
    </div>
  )
}

export default Post