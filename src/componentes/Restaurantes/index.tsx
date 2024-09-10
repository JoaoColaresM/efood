import {Cartao, Imagem, Descricao, Tags, Botao, TituloNota, Estrela} from './styles'
import Tag from '../Tag'
import estrela from '../../assets/imagens/estrela.svg'
import { Link } from 'react-router-dom'

type Props = {
    id: number
    imagem: string
    titulo: string
    descricao: string
    nota: number
    tags: string[]
}

const Restaurantes = ({id,descricao,imagem,nota,tags,titulo}:Props) => (
    <Cartao>
        <Imagem>
            <img src={imagem} alt={titulo}/>
        </Imagem>
        <Tags>
            {tags.map((x) => (
                <Tag key={x}>{x}</Tag>
            ))}
        </Tags>
        <TituloNota>
            <div>{titulo}</div>
            <Estrela>
                <div>{nota}</div>
                <img src={estrela} alt='estrela' title='estrela'/>
            </Estrela>
        </TituloNota>
        <Descricao>{descricao}</Descricao>
        <Link to={'/Perfil'}>
            <Botao>saiba mais</Botao>
        </Link>
    </Cartao>
)

export default Restaurantes