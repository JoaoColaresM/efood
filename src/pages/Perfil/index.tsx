import ListaMenu from '../../componentes/ListaMenu'
import Opcao from "../../modelos/Opcao"
import Cabecalho from "../../componentes/Cabecalho"
import pizza from '../../assets/imagens/pizza.svg'

type Menu = Omit<Opcao, 'nota' | 'tags'>

const OpcoesPerfil: Menu[] = [
    {
        id: 7,
        titulo: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        imagem: pizza,
    },
    {
        id: 8,
        titulo: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        imagem: pizza,
    },
    {
        id: 9,
        titulo: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        imagem: pizza,
    },
    {
        id: 10,
        titulo: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        imagem: pizza,
    },
    {
        id: 11,
        titulo: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        imagem: pizza,
    },
    {
        id: 12,
        titulo: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        imagem: pizza,
    },
]

const Perfil = () => (
    <>
        <Cabecalho inicial = {false} />
        <ListaMenu opcaoMenu={OpcoesPerfil} />
    </>
)

export default Perfil