import "./App.css"

import Avatar from "./atoms/avatar/avatar";
import Badge from "./atoms/badge/badge";
import Card from "./atoms/card/card";
import Footer from "./atoms/footer/footer";
import Header from "./atoms/header/header";


function App() {
  return (
    <div className="App">
      <Header title="React Beginner's Quiz"/>
      <Avatar description="This is My Avatar"/>
      <Card title="Select title 1" content="Insert content 1" />
      <Card title="Select title 2" content="Insert content 2" />
      <Card title="Select title 3" content="Insert content 3" />
      <Badge label="New"/>
      <Footer content="Created with ❤️ by [Sergio Gutierrez]" />
    </div>
  );
}

export default App;
