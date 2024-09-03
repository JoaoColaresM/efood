import Opcao from '../../modelos/Opcao'
import {BotaoMenu,Descricao,ImagemMenu,OpcaoMenu,Titulo} from './styles'

export type Props = Omit<Opcao, 'nota' | 'tags'>

const Cardapio = ({id,descricao,imagem,titulo} : Props) => (
    <OpcaoMenu>
        <ImagemMenu>
            <img src={imagem} alt={titulo}/>
        </ImagemMenu>
        <Titulo>{titulo}</Titulo>
        <Descricao>{descricao}</Descricao>
        <BotaoMenu>Adicionar ao carrinho</BotaoMenu>
    </OpcaoMenu>
)

export default Cardapio