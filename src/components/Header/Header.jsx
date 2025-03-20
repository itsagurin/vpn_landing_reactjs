import logo from '../../assets/logo.svg'
import burger from '../../assets/burger.png'
import './css/Header.scss'

export default function Header() {
    const toggleMenu = () => {
        const mobileMenu = document.querySelector('.mobile-menu');
        mobileMenu.classList.toggle('active');
    };

    return (
        <header className="header d-flex justify-content-between align-items-center py-3 px-4">
            <img src={logo} alt="logo" />

            <div className="mobile-menu">
                <div className="mobile-menu-header">
                    <img src={logo} alt="logo" className="mobile-logo" />
                    <button className="close-menu" onClick={toggleMenu}>
                        <img src={burger} alt="close menu" />
                    </button>
                </div>

                <nav className="navbar navbar-expand">
                    <div className="nav-links">
                        <a className="nav-link" href="#">Features</a>
                        <a className="nav-link" href="#">Pricing</a>
                        <a className="nav-link" href="#">Testimonial</a>
                        <a className="nav-link" href="#">Help</a>
                    </div>
                </nav>

                <div className="auth-buttons">
                    <a href="#" className="sign-in">Sign in</a>
                    <a href="#" className="sign-up">Sign up</a>
                </div>
            </div>

            <div className='burger' onClick={toggleMenu}>
                <img src={burger} alt="menu"/>
            </div>

            <nav className="desktop-nav navbar navbar-expand">
                <div className="nav-links">
                    <a className="nav-link" href="#">Features</a>
                    <a className="nav-link" href="#">Pricing</a>
                    <a className="nav-link" href="#">Testimonial</a>
                    <a className="nav-link" href="#">Help</a>
                </div>
            </nav>

            <div className="desktop-auth auth-buttons">
                <a href="#" className="sign-in">Sign in</a>
                <a href="#" className="sign-up">Sign up</a>
            </div>
        </header>
    );
}