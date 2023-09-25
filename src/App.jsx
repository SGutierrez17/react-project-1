import "./App.css"

import Footer from "./atoms/footer/footer";
import Header from "./atoms/header/header";


function App() {
  return (
    <div className="App">
      <Header title="Welcome"/>
      <Footer content="Welcome to my first react project" />
    </div>
  );
}

export default App;
