import "./css/ReviewCards.scss"
import rate from "../../assets/icons/star.svg"

export default function ReviewCards(props) {
    return(
        <div className="comment-wr">
            <div className="icon">
                <div className="img-wr">
                    <img src={props.img} alt="icon"/>
                </div>

                <div className="text-block">
                    <h1>{props.name}</h1>
                    <p>{props.location}</p>
                </div>

                <div className="rate">
                    <p>4.5</p>
                    <img src={rate} alt="rate"/>
                </div>
            </div>
            <div className="disc">
                <p className="comment">{props.content}</p>
            </div>
        </div>
    )
}