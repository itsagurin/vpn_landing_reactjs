import premium from '../../assets/premium.svg';
import mark from '../../assets/mark.svg';
import Button from "../Button/Button.jsx";

const PlanCard = ({ plan }) => {
    return (
        <div className="d-flex flex-column plan container">
            <img src={premium} alt="premium" className="mb-4 align-self-center" />
            <h3 className="mb-5 text-center">{plan.name}</h3>

            <div>
                {plan.features.map((feature, index) => (
                    <div key={index} className="d-flex align-items-center feature">
                        <img src={mark} alt="mark" className="me-2" />
                        <p className="mb-0">{feature}</p>
                    </div>
                ))}
            </div>
            <h2 className="mt-auto pb-3">{plan.price}</h2>
            <Button content="Select" />
        </div>
    );
};

export default PlanCard;