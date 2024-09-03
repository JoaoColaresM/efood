import Cardapio, { Props } from "../Cardapio"
import {ListaPerfil} from './styles'

type Menu = {
    opcaoMenu: Props[]
}

const ListaMenu = ({opcaoMenu} : Menu) => (
    <div className="container">
        <ListaPerfil>
            {opcaoMenu.map((menu) => (
                <Cardapio
                    key={menu.id}
                    id={menu.id}
                    titulo={menu.titulo}
                    imagem={menu.imagem}
                    descricao={menu.descricao}
                />
            ))}
        </ListaPerfil>
    </div>
)

export default ListaMenu