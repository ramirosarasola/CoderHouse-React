import '../components/NavBar.css'
import 'bootstrap/dist/css/bootstrap.css'
import '/logo_AllIn.jpg'
import shop_icon from'/shop_icon.svg'

function NavBar() {
    return (
        <div className="container-fluid p-0 position-fixed">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-xl-top sticky-lg-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="">
                    <img src="logo_AllIn.jpg" alt="logo nav" className="logo__nav rounded-circle"/>
                </a>
                <a className="navbar-brand navbar__brand--title" href="">ALL IN CALISTHENICS</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02"
                    aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end pe-5" id="navbarColor02">
                    <ul className="navbar-nav pe-5">
                        <li className="nav-item">
                            <a className="nav-link active px-3" href="index.html">PRINCIPIANTES
                                <span className="visually-hidden">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3" href="">INTERMEDIOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3" href="">AVANZADOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3" href=""><img src={shop_icon} className="App-logo" alt="logo" /></a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>
)}

export default NavBar;
