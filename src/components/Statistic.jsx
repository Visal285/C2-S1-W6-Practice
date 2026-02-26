function Statistic({avg,min,max}) {
    return (
        <div className="statistic">
           
            <p>Average: {avg.toFixed(2)}</p>
            <p>Min: {min}</p>
            <p>Max: {max}</p>
        </div>
    );
}
export default Statistic;