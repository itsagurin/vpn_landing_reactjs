import ReviewCards from "../ReviewCards/ReviewCards.jsx";
import autor1 from "../../assets/images/autor1.svg";
import autor2 from "../../assets/images/autor2.svg";
import autor3 from "../../assets/images/autor3.svg";
import arrow from "../../assets/icons/arrow.svg";
import "./css/Review.scss";

export default function Review() {
    function scrollLeft() {
        const commentsEl = document.querySelector('.comments');
        commentsEl.scrollBy({ left: -404, behavior: 'smooth' });
        updateActiveDot();
    }

    function scrollRight() {
        const commentsEl = document.querySelector('.comments');
        commentsEl.scrollBy({ left: 404, behavior: 'smooth' });
        updateActiveDot();
    }

    function updateActiveDot() {
        setTimeout(() => {
            const commentsEl = document.querySelector('.comments');
            const scrollPosition = commentsEl.scrollLeft;
            const cardWidth = 404 + 18;
            const activeIndex = Math.round(scrollPosition / cardWidth);

            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                if (index === activeIndex) {
                    dot.classList.add('current');
                    dot.classList.remove('dot');
                } else {
                    dot.classList.remove('current');
                    dot.classList.add('dot');
                }
            });
        }, 300);
    }

    function scrollToReview(index) {
        const commentsEl = document.querySelector('.comments');
        const cardWidth = 404 + 18;
        commentsEl.scrollTo({ left: index * cardWidth, behavior: 'smooth' });

        const dots = document.querySelectorAll('.scroll div');
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.className = 'current';
            } else {
                dot.className = 'dot';
            }
        });
    }

    return(
        <div className="feed-wr">
            <div className="review-main-text text-center mx-auto">
                <h2 className="pb-2">Trusted by thousands of happy customer</h2>
                <p className="pb-4 text-secondary">Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
            </div>
            <div className="comments">
                <ReviewCards img={autor1} name="Brooklyn Simmons" location="Warsaw, Poland" content="wow...iam very happy to use this vpn,it turned out to be more than my expectations and so far there have been no problems. laslesvpn always the best"/>
                <ReviewCards img={autor2} name="Darlene Robertson" location="Warsaw, Poland" content="wow...iam very happy to use this vpn,it turned out to be more than my expectations and so far there have been no problems. laslesvpn always the best"/>
                <ReviewCards img={autor3} name="Darrell Steward" location="Warsaw, Poland" content="wow...iam very happy to use this vpn,it turned out to be more than my expectations and so far there have been no problems. laslesvpn always the best"/>
            </div>

            <div className="buttons">
                <div className="scroll">
                    <div className="current" onClick={() => scrollToReview(0)}></div>
                    <div className="dot" onClick={() => scrollToReview(1)}></div>
                    <div className="dot" onClick={() => scrollToReview(2)}></div>
                </div>

                <div className="arrows">
                    <button className="left-arrow btn" onClick={scrollLeft}><img src={arrow} alt="arrow"/></button>
                    <button className="right-arrow btn" onClick={scrollRight}><img src={arrow} alt="arrow"/></button>
                </div>
            </div>
        </div>
    );
}