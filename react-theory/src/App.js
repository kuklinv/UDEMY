import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Picture from "./PictureComponent/Picture.js";
import SimpleComponent from "./SimpleESComponent/SimpleComponent.js";

class App extends Component {
  render() {
    const rootDivStyle = {
      textAlign: "center",
    };
    this.state = {
      pics: [
        { name: "first pic", id_pic: 1 },
        { name: "second pic", id_pic: 2 },
        { name: "third pic", id_pic: 3 },
      ],
      pageTitle: "Hello UDEMY React course",
    };

    const pics = this.state.pics;

    return (
      <div style={rootDivStyle}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 style={{ color: "yellow" }}>{this.state.pageTitle}</h1>
          <p style={{ color: "gray" }}>start at 11/22/2020</p>
          <span></span>
          <Picture name={pics[0].name} id_pic={pics[0].id_pic} />
          <Picture name={pics[1].name} id_pic={pics[1].id_pic} />
          <Picture name={pics[2].name} id_pic={pics[2].id_pic} />
          <span></span>
        </header>
      </div>

      // <div style={rootDivStyle}>
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 style={{ color: "yellow" }}>{this.state.pageTitle}</h1>
      //     <p style={{ color: "gray" }}>start at 11/22/2020</p>
      //     <span></span>
      //     <Picture name={pics[0].name} id_pic={pics[0].id_pic} />
      //     <Picture name={pics[1].name} id_pic={pics[1].id_pic} />
      //     <Picture name={pics[2].name} id_pic={pics[2].id_pic} />
      //   </header>
      // </div>

      // <div style={rootDivStyle}>
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 style={{ color: "yellow" }}>Hello UDEMY React course</h1>
      //     <p style={{ color: "gray" }}>start at 11/22/2020</p>
      //     <span></span>
      //     <Picture name={"first pic"} id_pic={1} />
      //     <Picture name={"second pic"} id_pic={2}>
      //       <span style={{ color: "red" }}>children pic</span>
      //     </Picture>
      //     <span></span>
      //     <SimpleComponent />
      //   </header>
      // </div>

      //   <div className="App">
      //     <header className="App-header">
      //       <img src={logo} className="App-logo" alt="logo" />
      //       <h1>Hello UDEMY React course</h1>
      //       <p>start at 11/22/2020</p>
      //     </header>
      //   </div>
    );
  }
}

export default App;
