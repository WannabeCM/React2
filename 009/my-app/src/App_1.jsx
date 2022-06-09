import "./App.css";

const name = "sungbum";
const 로그인 = true;
const someStyle = { backgroundColor: "black", color: "white" };
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();

function App() {
  return (
    <div>
      <h1 style={{ backgroundColor: "black" }} className="one">
        hello {name},{age()}!!
      </h1>
      <div className="wrapper">
        <p>{로그인 ? "one" : "two"}</p>
        <h1 style={someStyle}>hello hi</h1>
        <p>년:{year}</p>
        <p>월/일:{month + "/" + date}</p>
        <p>
          시간:{hour}시{minute}분{second}초
        </p>
      </div>
    </div>
  );
}

function age() {
  return 10;
}

export default App;
