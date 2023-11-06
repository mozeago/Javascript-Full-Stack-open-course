const Part = (props) => {
  console.log(props);
  return (
    <>
      <p>
        {props.title} {props.exercises}
      </p>
    </>
  );
};
export default Part;
