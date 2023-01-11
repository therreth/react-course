import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
function Todo(props) {
  const [showModal, setModal] = useState(false);

  function deleteHandler() {
    setModal(true);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
