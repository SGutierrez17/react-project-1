import "./App.css"

import Avatar from "./atoms/avatar/avatar";
import Footer from "./atoms/footer/footer";
import Header from "./atoms/header/header";



function App() {
  return (
    <div className="App">
      <Header title="Welcome"/>
      <Footer content="Welcome to my first react project" />
      <Avatar 
        description="My Avatar"
      />
    </div>
  );
}

export default App;
