import { useState } from "react";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write the comments here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br/>
      <button className="btn btn-dark ms-2 px-3 py-2" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="btn btn-dark ms-2 px-3 py-2"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
      <br/>
    </form>
  );
};              

export default CommentForm;
