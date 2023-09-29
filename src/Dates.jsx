import "./styles/Dates.css";

const Dates = () => {
    return (
    <div className="Dates">
        <label className="Dates-start-txt">Start</label>
        <input className="Dates-start" type="date"></input>
        <label className="Dates-end-txt">End</label>
        <input className="Dates-end" type="date"></input>
    </div>
    );
}

export default Dates;