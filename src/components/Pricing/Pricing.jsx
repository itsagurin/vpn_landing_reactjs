import './css/Pricing.scss';
import PlanCard from '../PlanCard/PlanCard.jsx';
import { plansData } from '../../data/plans.jsx';

export default function Pricing() {
    return (
        <div className="pricing">
            <h1>Choose your plan</h1>
            <p className="main-p pb-4">
                Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper.
                Vel vel erat semper augue.
            </p>
            <div className="d-flex justify-content-between align-items-center plans">
                {plansData.map((plan, index) => (
                    <PlanCard key={index} plan={plan} />
                ))}
            </div>
            <div className="carousel-buttons">
                <button id="scroll-left">←</button>
                <button id="scroll-right">→</button>
            </div>
        </div>
    );
}

if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
        const leftButton = document.getElementById('scroll-left');
        const rightButton = document.getElementById('scroll-right');
        const plansContainer = document.querySelector('.plans');

        function scrollCards(direction) {
            const cardWidth = 280 + 29; // Ширина карточки + отступ
            const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;

            plansContainer?.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }

        leftButton?.addEventListener('click', () => scrollCards('left'));
        rightButton?.addEventListener('click', () => scrollCards('right'));
    });
}