import React from "react";
import Score from "../score/Score";

const StudentItem = ({ student, idx }) => {
  const scores = student.scores.map((score, idx) => (
    <Score score={score} key={idx} />
  ));
  return (
    <div>
      <h1>{student.name}</h1>
      <p>{student.bio}</p>
      {scores}
    </div>
  );
};

export default StudentItem;
