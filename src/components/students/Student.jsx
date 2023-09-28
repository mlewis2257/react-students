import React from "react";
import StudentItem from "./StudentItem";

const Student = ({ students }) => {
  return (
    <div>
      {students.map((student, idx) => (
        <StudentItem student={student} key={idx} />
      ))}
    </div>
  );
};

export default Student;
