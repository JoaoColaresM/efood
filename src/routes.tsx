import {Routes, Route} from 'react-router-dom'
import Inicial from './pages/Inicial'
import Perfil from './pages/Perfil'

const Rotas = () => (
    <Routes>
        <Route path='/' element={<Inicial/>}/>
        <Route path='/Perfil' element={<Perfil/>}/>
    </Routes>
)

export default Rotas