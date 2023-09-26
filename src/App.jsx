import "./App.css"

import Avatar from "./atoms/avatar/avatar";
import Badge from "./atoms/badge/badge";
import Card from "./atoms/card/card";
import Footer from "./atoms/footer/footer";
import Header from "./atoms/header/header";


function App() {
  return (
    <div className="App">
      <Header title="Welcome"/>
      <Footer content="Welcome to my first react project" />
      <Avatar description="This is My Avatar"/>
      <Card 
      title="Select title"
      content="Insert content"
      />
      <Badge label="Insert text"/>
    </div>
  );
}

export default App;
