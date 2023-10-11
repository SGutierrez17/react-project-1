import "./App.css"

import Avatar from "./atoms/avatar/avatar";
import Badge from "./atoms/badge/badge";
import Counter from "./atoms/card/counter";
import Card from "./atoms/card/card";
import Footer from "./atoms/footer/footer";
import Header from "./atoms/header/header";


import myAvatar from "./atoms/avatar/myAvatar.svg"

export default function App() {
  return (
    <div className="App">
      <Header title="React Beginner's Quiz"/>
      <Avatar imageSrc={myAvatar} description="This is My Avatar"/>
      <Counter />
      <Card title="Select title 1" content="Insert content 1" >
        <Counter />
      </Card>
      <Card title="Select title 2" content="Insert content 2" />
      <Card title="Select title 3" content="Insert content 3" />
      <Badge label="New"/>
      <Footer content="Created with ❤️ by [Sergio Gutierrez]" />
    </div>
  );
}

