import logo from '../../assets/logo.svg';
import facebook from '../../assets/networks/facebook.svg';
import whatsapp from '../../assets/networks/whatsapp.svg';
import instagram from '../../assets/networks/instagram.svg';
import "./css/Footer.scss"

export default function Footer() {
    return (
        <div className="container-fluid footer">
            <div className="row mt-5 pt-4 ms-lg-4">
                <div className="col-md-5 text-start">
                    <div>
                        <img src={logo} alt="brand_logo" className="img-fluid footer__logo" />
                    </div>
                    <div className="mt-4">
                        <p className="text-secondary footer__description">
                            <b>LaslesVPN</b> is a private virtual network that has unique
                            features and has high security.
                        </p>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="me-2">
                            <img src={facebook} alt="fb_logo" className="img-fluid" />
                        </div>
                        <div className="me-2">
                            <img src={whatsapp} alt="whastapp_logo" className="img-fluid" />
                        </div>
                        <div className="me-2">
                            <img src={instagram} alt="insta_logo" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <h3 className="fw-medium footer__heading">Product</h3>
                            <div className="mt-3">
                                <p className="text-secondary mb-1 footer__link">Download</p>
                                <p className="text-secondary mb-1 footer__link">Pricing</p>
                                <p className="text-secondary mb-1 footer__link">Locations</p>
                                <p className="text-secondary mb-1 footer__link">Server</p>
                                <p className="text-secondary mb-1 footer__link">Countries</p>
                                <p className="text-secondary mb-1 footer__link">Blog</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h3 className="fw-medium footer__heading">Engage</h3>
                            <div className="mt-3">
                                <p className="text-secondary mb-1 footer__link">LaslesVPN ?</p>
                                <p className="text-secondary mb-1 footer__link">FAQ</p>
                                <p className="text-secondary mb-1 footer__link">Tutorials</p>
                                <p className="text-secondary mb-1 footer__link">About Us</p>
                                <p className="text-secondary mb-1 footer__link">Privacy Policy</p>
                                <p className="text-secondary mb-1 footer__link">Terms of service</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h3 className="fw-medium footer__heading">Earn Money</h3>
                            <div className="mt-3">
                                <p className="text-secondary mb-1 footer__link">Affiliate</p>
                                <p className="text-secondary mb-1 footer__link">Become Partner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}