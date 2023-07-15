import "./Result.css";

const Result = (props) => {
  const results = props.results;

  return (
    <>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>YEAR NUMBER</td>
            <td>TOTAL SAVINGS END OF YEAR</td>
            <td>INTEREST GAINED IN YEAR</td>
            <td>TOTAL INTEREST GAINED</td>
            <td>TOTAL INVESTED CAPITAL</td>
          </tr>

          {results.length > 0 ? (
            results.map((result, idx) => {
              return (
                <tr key={idx}>
                  <td>{result.year}</td>
                  <td>{result.savingsEndOfYear}</td>
                  <td>{result.yearlyInterest}</td>
                  <td>{result.totalinterest}</td>
                  <td>{result.totalInvestment}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>Notext</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Result;
