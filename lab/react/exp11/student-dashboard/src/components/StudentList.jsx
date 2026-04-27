function StudentList({ students }) {
  return (
    <div>
      <h2>Student List</h2>

      {students.length === 0 ? (
        <p>No students added</p>
      ) : (
        students.map((s, index) => <p key={index}>{s}</p>)
      )}
    </div>
  );
}

export default StudentList;