import { useState } from "react";

function AddStudent({ students, setStudents }) {
  const [name, setName] = useState("");

  const addStudent = () => {
    if (name === "") {
      alert("Enter name");
      return;
    }

    setStudents([...students, name]);
    setName("");
    alert("Student Added!");
  };

  return (
    <div>
      <h2>Add Student</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addStudent}>Add</button>
    </div>
  );
}

export default AddStudent;