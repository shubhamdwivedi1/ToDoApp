// import logo from './logo.svg';
import "./App.css";
import Hello from "./components/Hello";
import PropsPractice from "./components/PropsPractice"
import Message from "./components/Message"
import Form from "./components/form"
import Counter from "./components/Counter"
import Todo from "./components/todo"


// import StatePractice from "./components/StatePractice"


function App() {
  return (
    <div className="App">
      <Todo />
      <Counter />
      {/* <Hello />
      <PropsPractice name="shubham" passion="coding">
      <p>This is Prop Children Class</p>
      <button>Submit</button>
      </PropsPractice>
      <Message name="shubham" passion="coding">
      </Message> */}
      {/* <Form />
      <Counter /> */}

      {/* <StatePractice /> */}
      
    </div>
  );
}

export default App;
