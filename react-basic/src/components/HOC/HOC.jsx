export const withBackground = (WrappedComponent) => {
  return () => {
    return (
      <div style={{ background: "blue", color: "#fff" }}>
        <WrappedComponent />
      </div>
    );
  };
};

const HelloWorld = () => {
    return <h1>Hello World</h1>
}
const HOC = withBackground(HelloWorld);
export default HOC;
