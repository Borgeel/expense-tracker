const Button = ({ changeTitle, id }) => {
  return <button onClick={() => changeTitle(id)}>Change Title</button>;
};

export default Button;
