import Opcao from "../../modelos/Opcao";
import Sushi from '../../assets/imagens/Hioki_Sushi.svg'
import macarrao from '../../assets/imagens/Trattoria.svg'
import ListaDeRestaurantes from "../../componentes/ListaDeRestaurantes";
import Cabecalho from "../../componentes/Cabecalho";

const OpcoesInicio:Opcao[] = [
    {
        id: 1,
        titulo: 'Hioki Sushi ',
        descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        imagem: Sushi,
        nota: 4.9,
        tags: ['Destaque da semana', 'Japonesa'],
    },
    {
        id: 2,
        titulo: 'La Dolce Vita Trattoria',
        descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        imagem: macarrao,
        nota: 4.6,
        tags: ['Italiana'],
    },
    {
        id: 3,
        titulo: 'La Dolce Vita Trattoria',
        descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        imagem: macarrao,
        nota: 4.6,
        tags: ['Italiana'],
    },
    {
        id: 4,
        titulo: 'La Dolce Vita Trattoria',
        descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        imagem: macarrao,
        nota: 4.6,
        tags: ['Italiana'],
    },
    {
        id: 5,
        titulo: 'La Dolce Vita Trattoria',
        descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        imagem: macarrao,
        nota: 4.6,
        tags: ['Italiana'],
    },
    {
        id: 6,
        titulo: 'La Dolce Vita Trattoria',
        descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        imagem: macarrao,
        nota: 4.6,
        tags: ['Italiana'],
    },
]

const Inicial = () => (
    <>
        <Cabecalho inicial = {true}/>
        <ListaDeRestaurantes opcaoMenu={OpcoesInicio}/>
    </>
)

export default Inicial