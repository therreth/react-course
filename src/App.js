import Modal from "./components/Modal";
import Todo from "./components/Todo";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div>
      <h1>My todos</h1>
      <Todo text="Pope"></Todo>
      <Todo></Todo>
      <Todo></Todo>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
