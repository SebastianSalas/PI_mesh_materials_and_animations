const Lights = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 5]} intensity={2} color={"red"} />
    </>
  );
};

export default Lights;
