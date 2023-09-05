const Info = (props) => {
  return (
    <>
      <div className="canvas-text-div">
        <p>{props.name}</p>
        <p>{props.biography}</p>
      </div>
    </>
  );
};
export default Info;
