import './App.css';
import Header from "./component/Header"
import Body from "./component/Body"
import Footer from "./component/Footer"

function App() {
  const Bodyprops = {
    name: "clown1",
    localStorage:"인천",
    //favorList:["파스타","빵","떡볶이"],
  }
  return (
    <div className="App">
      <Header />
      <Body {...Bodyprops} />
      <Footer />
    </div>
  );
}

export default App;
