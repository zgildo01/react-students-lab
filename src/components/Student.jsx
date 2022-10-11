import Score from "./Score";

const Student = ({student}) => {
  return (
    <>
    <hr />
    <h2>{student.name}</h2>
    <h3>{student.bio}</h3>
    <br />
    <hr />
      {student.scores.map(score =>
          <Score score={score} />
        )}
    <hr />
    </>
  );
}

export default Student;