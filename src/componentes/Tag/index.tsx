import {BarraDaTag} from './styles'
import { Link } from 'react-router-dom'

export type Props = {
    children: string
}

const Tag = ({children}:Props) => (
    <BarraDaTag>
        <Link to={children === 'Italiana' ? '/Perfil' : '#'}>
            {children}
        </Link>
    </BarraDaTag>
)

export default Tag