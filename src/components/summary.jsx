export default function Summary({summary}) {
    return (
        <div className="summary">
            {summary.map((item, index) => (
                <div key={index} className="summ-card">
                    <span className={`icon ${item.icon}`}></span>
                    <div>
                        <p>{item.title}</p>
                        <h5>{item.amount}</h5>
                    </div>
                </div>
            ))}
        </div>
    );
}
