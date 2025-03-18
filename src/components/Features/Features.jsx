import './css/Features.scss'
import Features_img from '../../assets/features_image.png'
import mark from '../../assets/mark.svg'

export default function Features() {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <img src={Features_img}/>
            <div className="text-start">
                <h2>We provide many
                    features you can use</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus
                    ullamcorper. Vel vel erat semper augue.</p>
                <div>
                    <div className="d-flex align-items-center feature">
                        <img src={mark} alt="mark" className="me-2" />
                        <p className="mb-0 feature-p">Powerful online protection.</p>
                    </div>
                    <div className="d-flex align-items-center feature">
                        <img src={mark} alt="mark" className="me-2" />
                        <p className="mb-0 a feature-p">Internet without borders</p>
                    </div>
                    <div className="d-flex align-items-center feature">
                        <img src={mark} alt="mark" className="me-2" />
                        <p className="mb-0 feature-p">Supercharged VPN</p>
                    </div>
                    <div className="d-flex align-items-center feature">
                        <img src={mark} alt="mark" className="me-2" />
                        <p className="mb-0 feature-p">No specific time limits</p>
                    </div>
                </div>
            </div>
        </div>
    )
}