import "./css/Subscribe.scss"
import Button from "../Button/Button.jsx";

export default function Subscribe(){
    return(
        <div className="sub-wr d-flex align-items-center justify-content-between">
            <div className="left-part text-start">
                <h1>Subscribe now for get special features!</h1>
                <p>Lorem ipsum dolor sit amet </p>
            </div>
            <Button content="Subscribe now"/>
        </div>
    )
}