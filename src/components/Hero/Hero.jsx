import "./css/Hero.scss";
import illustration from "../../assets/hero_Illustration.png";
import users from "../../assets/users_badge.svg";
import locations from "../../assets/locations_badge.svg";
import servers from "../../assets/servers_badge.svg";

export default function Hero() {
    return (
        <div className="hero-main">
            <div className="hero d-flex justify-content-between align-items-center">
                <div className="text-start">
                    <h1>Want anything to be easy with LaslesVPN</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
                        id purus ullamcorper. Vel vel erat semper augue.
                    </p>
                    <button className="btn btn-danger rounded-pill d-flex align-items-center justify-content-center">
                        Get started
                    </button>
                </div>
                <img src={illustration} alt="illustration" />
            </div>

            <div className="frame-16 d-flex justify-content-between align-items-center">
                <div className="badge d-flex align-items-center">
                    <img src={users} alt="users" />
                    <div className="badge-text">
                        <p className="number">90+</p>
                        <p className="label">Users</p>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="badge d-flex align-items-center">
                    <img src={locations} alt="locations" />
                    <div className="badge-text">
                        <p className="number">30+</p>
                        <p className="label">Locations</p>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="badge d-flex align-items-center">
                    <img src={servers} alt="servers" />
                    <div className="badge-text">
                        <p className="number">50+</p>
                        <p className="label">Servers</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
