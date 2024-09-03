import logo from '../../assets/imagens/logo.svg'
import { BarraCabecalhoInicio, Subtitulo, BarraCabecalhoPerfil, ImagemItaliano, Retangulo } from './styles'
import { Link } from 'react-router-dom'

type Props = {
    inicial: boolean
}

const Cabecalho = ({ inicial }: Props) => (
    <>
        {
            inicial === true ?
                <BarraCabecalhoInicio>
                    <Link to='/'>
                        <img src={logo} alt="efood" />
                    </Link>
                    <Subtitulo>
                        Viva experiências gastronômicas<br /> no conforto da sua casa
                    </Subtitulo>
                </BarraCabecalhoInicio>
                :
                <>
                    <BarraCabecalhoPerfil>
                        <nav className='container'>
                            <Link to='/'>
                                <h3>Restaurantes</h3>
                            </Link>
                            <Link to='/'>
                                <img src={logo} alt="efood" />
                            </Link>
                            <p>0 produto(s) no carrinho</p>
                        </nav>
                    </BarraCabecalhoPerfil>
                    <ImagemItaliano>
                        <Retangulo>
                            <div className='container'>
                                <span>Italiana</span>
                                <h2>La Dolce Vita Trattoria</h2>
                            </div>
                        </Retangulo>
                    </ImagemItaliano>
                </>
        }
    </>
)

export default Cabecalho