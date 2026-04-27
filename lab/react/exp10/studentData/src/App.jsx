import Student from './Student';

function App() {

  // Event Function
  const showMessage = () => {
    alert("Button Clicked!");
  };

  return (
    <>
      <h1>Student Info</h1>

      <button onClick={showMessage}>
        Click Me
      </button>

      <Student name="Arti" age="20" course="aiml" />
    </>
  );
}

export default App;