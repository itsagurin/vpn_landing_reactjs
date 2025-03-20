import map from "../../assets/map.svg"
import companies from "../../assets/companies.svg"
import './css/Map.scss'

export default function Map() {
    return (
        <div className="text-center">
            <div className="map-text">
                <h3 className="pb-3">Huge global network of fast VPN</h3>
                <p className="pb-5">Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
                    id purus ullamcorper. Vel vel erat semper augue.</p>
            </div>
            <div className="map-container">
                <img src={map} alt="map" className="responsive-image" />
            </div>
            <div className="companies-container">
                <img src={companies} alt="companies" className="responsive-image" />
            </div>
        </div>
    )
}