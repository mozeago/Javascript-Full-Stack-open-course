const History = (propsFromParent) => {
  if (propsFromParent.allCliks.length === 0) {
    return <div>the app is used by processing the buttons</div>;
  }
  return <div>button press history: {propsFromParent.allCliks}</div>;
};
export default History;
