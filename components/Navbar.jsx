import '../styles/navbar.css'
import CartWidget from './CartWidget'

function Navbar() {
    return (
        <nav className="barra-nav">
            <img src='../logo.tienda.jpg' alt='logo' className='logo' />
            <a className='nav' href="">Nuevos ingresos</a>
            <a className='nav' href="">Originales</a>
            <a className='nav' href="">Mas vendidos</a>
            <a className='nav' href="">Ofertas</a>
            <CartWidget/>
        </nav>
    )
}
export default Navbar