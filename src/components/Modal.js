function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function confirmeHandler() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you Sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmeHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
