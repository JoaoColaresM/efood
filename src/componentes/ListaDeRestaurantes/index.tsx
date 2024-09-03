import Restaurantes from "../Restaurantes";
import Opcao from "../../modelos/Opcao";
import { ListaInicial} from './styles'

type Props = {
    opcaoMenu: Opcao[]
}

const ListaDeRestaurantes = ({ opcaoMenu }: Props) => (
        <div className="container">
            <ListaInicial>
                {opcaoMenu.map((menu) => (
                    <Restaurantes
                        key={menu.id}
                        id={menu.id}
                        titulo={menu.titulo}
                        descricao={menu.descricao}
                        imagem={menu.imagem}
                        nota={menu.nota}
                        tags={menu.tags}
                    />
                ))}
            </ListaInicial>
        </div>
)

export default ListaDeRestaurantes