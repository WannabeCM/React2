import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
span {
  color : red;
  font-size : 12px;
}
`;

function Hello() {
  return <span> world</span>;
}

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>test2</h1>
      <span>hello</span>
      <Hello />
    </div>
  );
}

export default App;
