const Cell = () => {
  return (
    <>
      <table className="result">
        <tr>
          {results.length > 0 ? (
            results.map((result) => {
              <>
                <td>{result.year}</td>
                <td>{result.savingsEndofYear}</td>
                <td>{result.yearlyInterest}</td>
                <td>{result.totalinterest}</td>
                <td>{result.totalInvestment}</td>
              </>;
            })
          ) : (
            <h1>No text</h1>
          )}
        </tr>
      </table>
    </>
  );
};

export default Cell;
