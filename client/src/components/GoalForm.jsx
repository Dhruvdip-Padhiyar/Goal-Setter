import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";

function GoalForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onChange = (event) => {
    setText(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(createGoal({ text }));
    setText("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            className="form-control"
            id="text"
            value={text}
            name="text"
            onChange={onChange}
            placeholder="Enter your goal"
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-block add-button"
            disabled={text.length > 5 ? false : true}
          >
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
