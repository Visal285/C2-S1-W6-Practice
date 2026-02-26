function Statistic({avg,min,max}) {
    return (
        <div className="statistic">
           
            <p>Average: {avg}</p>
            <p>Min: {min}</p>
            <p>Max: {max}</p>
        </div>
    );
}
export default Statistic;