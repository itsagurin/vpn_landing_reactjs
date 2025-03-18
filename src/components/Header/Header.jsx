import logo from '../../assets/logo.svg'
import './css/Header.scss'

export default function Header() {
    return (
        <header className="header d-flex justify-content-between align-items-center py-3 px-4">
            <img src={logo} alt="logo" />
            <nav className="navbar navbar-expand">
                <div className="nav-links">
                    <a className="nav-link" href="#">Features</a>
                    <a className="nav-link" href="#">Pricing</a>
                    <a className="nav-link" href="#">Testimonial</a>
                    <a className="nav-link" href="#">Help</a>
                </div>
            </nav>
            <div className="auth-buttons d-flex align-items-center">
                <a href="#" className="sign-in">Sign in</a>
                <a href="#" className="sign-up">Sign up</a>
            </div>
        </header>
    );
}