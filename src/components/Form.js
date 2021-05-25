import React from 'react';

const Form = ({ setInputText }) => {
  const inputTextHandler = e => {
    //   console.log(e.target.value);
    setInputText(e.target.value);
  };
  return (
    <form>
      <input onChange={inputTextHandler} type="text" />
      <button type="submit">+</button>
      <div>
        <select name="todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
export default Form;