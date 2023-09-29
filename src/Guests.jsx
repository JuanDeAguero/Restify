import "./styles/Guests.css";

const Guests = () => {
    return (
    <div className="Guests">
        <div className="Guests-adults">
            <div>
                Adults (13+)
            </div>
            <div className="Guests-adults-stepper">
                <button className="Guests-stepper-button">
                    -
                </button>
                <div className="Guests-stepper-number">
                    0
                </div>
                <button className="Guests-stepper-button">
                    +
                </button>
            </div>
        </div>
        <div className="Guests-children">
            <div>
                Children (2-12)
            </div>
            <div className="Guests-children-stepper">
                <button className="Guests-stepper-button">
                    -
                </button>
                <div className="Guests-stepper-number">
                    0
                </div>
                <button className="Guests-stepper-button">
                    +
                </button>
            </div>
        </div>
        <div className="Guests-infants">
            <div>
                Infants (under 2)
            </div>
            <div className="Guests-infants-stepper">
                <button className="Guests-stepper-button">
                    -
                </button>
                <div className="Guests-stepper-number">
                    0
                </div>
                <button className="Guests-stepper-button">
                    +
                </button>
            </div>
        </div>
    </div>
    );
}

export default Guests;