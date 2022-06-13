function App() {
  // const test = <h1>hello test</h1>;
  // console.log(test);
  function Test(props) {
    console.log(props);
    return <h1>hello test</h1>;
  }
  return (
    <div className="App">
      {[
        <h1 key="1">hello 1</h1>,
        <h1 key="2">hello 2</h1>,
        <h1 key="3">hello 3</h1>,
        <h1 key="4">hello 4</h1>,
        <h1 key="5">hello 5</h1>,
        <Test a="10" b="20" c="30" />,
        <Test>
          <h1>hello 5</h1>
        </Test>,
      ]}
    </div>
  );
}

export default App;
