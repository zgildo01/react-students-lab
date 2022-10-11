const Score = ({score}) => {
  return (
    <>
    <hr />
    <h4>{score.date}</h4>
    <h4>{score.score}</h4>
    <hr />
    </>
  );
}

export default Score;