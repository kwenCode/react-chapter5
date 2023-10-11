import './App.css';
import Header from "./component/Header"
import Body from "./component/Body"
import Footer from "./component/Footer"

function ChildCmp(){
  return <div>child component</div>
}

function App() {
  return (
    <div className="App">
      <Header />
      <Body>
        <ChildCmp />
      </Body>
      <Footer />
    </div>
  );
}

export default App;
