import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Picture from "./PictureComponent/Picture.js";
import _ from "lodash";
// import SimpleComponent from "./SimpleESComponent/SimpleComponent.js";

class App extends Component {
  // buttonClick: document.querySelector(".buttonClick");

  // buttonClick.addEventListener("click", () => {
  //   console.log("buttonClick");
  // });
  state = {
    pics: [
      { name: "first pic", id_pic: 1 },
      { name: "second pic", id_pic: 2 },
      { name: "third pic", id_pic: 3 },
    ],
    pageTitle: "Hello UDEMY React course",
    showPicture: false,
  };

  changeTitleHandler = () => {
    console.log("click");
  };

  changeStateTitleHandler = (newTitle) => {
    // const oldTitle = this.state.pageTitle;
    // const newTitle = oldTitle + "  (changed)";
    this.setState({ pageTitle: newTitle });
  };

  changeInputHandler = (event) => {
    // _.debounce(this.setState({ pageTitle: event.target.value }), 300);
    //TODO: don't working debounce
    this.setState({ pageTitle: event.target.value });
  };

  changeStateShowPicsHandler = () => {
    this.setState({
      showPicture: !this.state.showPicture,
    });
  };

  changeNameInput = (name, index) => {
    const thisPicture = this.state.pics[index];
    thisPicture.name = name;
    // console.log(thisPicture.name);
    const picsClone = [...this.state.pics]; // Important!! its clone of state! without this cant set new state
    picsClone[index] = thisPicture;
    this.setState({
      pics: picsClone,
    });
  };
  // use pure function because using 'bind' with invoke
  handleDelete(index) {
    const picsClone = this.state.pics.concat(); // here using concat without arguments for cloning state
    picsClone.splice(index, 1);
    this.setState({
      pics: picsClone,
    });
  }

  render() {
    const rootDivStyle = {
      textAlign: "center",
    };

    let pictureList = null;
    if (this.state.showPicture) {
      pictureList = this.state.pics.map((pic, index) => {
        return (
          <Picture
            key={index}
            name={pic.name}
            id_pic={pic.id_pic}
            onDelete={this.handleDelete.bind(this, index)}
            changeTitleButton={this.changeStateTitleHandler.bind(
              this,
              pic.name
            )}
            onChangeName={(event) =>
              this.changeNameInput(event.target.value, index)
            }
          />
        );
      });
    }

    // this.state = {
    //   pics: [
    //     { name: "first pic", id_pic: 1 },
    //     { name: "second pic", id_pic: 2 },
    //     { name: "third pic", id_pic: 3 },
    //   ],
    //   pageTitle: "Hello UDEMY React course",
    // };

    // const pics = this.state.pics;

    // ToDO: not working handler => i'll try eventListener
    // function changeTitleHandler() {
    //   console.log("click");
    // }

    // try to iterate for state array
    // const mappingPics = (stateArr) => stateArr.map((element) => (`<Picture name={${element.name}} id_pic={${element.id_pic}} />`),

    return (
      <div style={rootDivStyle}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 style={{ color: "yellow" }}>{this.state.pageTitle}</h1>
          <p style={{ color: "gray" }}>start at 11/22/2020</p>

          <input type="text" onChange={this.changeInputHandler}></input>

          <button className="buttonClick" onClick={this.changeTitleHandler}>
            Change title
          </button>

          <button
            className="buttonSetState"
            onClick={this.changeStateTitleHandler.bind(this, "Change state")}
          >
            Change state
          </button>

          <button
            className="buttonTogglePics"
            onClick={this.changeStateShowPicsHandler}
          >
            Toggle pics
          </button>

          {/* <button className="buttonClick">Change title</button> */}

          <div>
            <span style={{}}></span>
          </div>

          {/* <span>{mappingPics(pics)}</span>
          TODO: i wont iterate state.....
           */}
          <div className="border">
            {pictureList}
            {/* use different ways for put hendlers on event on button click */}
            {/* <Picture
              name={pics[0].name}
              id_pic={pics[0].id_pic}
              changeTitleButton={this.changeStateTitleHandler.bind(
                // its best practice for browser - not re-render page
                this,
                pics[0].name
              )}
            />
            <Picture
              name={pics[1].name}
              id_pic={pics[1].id_pic}
              changeTitleButton={() =>
                this.changeStateTitleHandler(pics[1].name)
              }
            />
            <Picture
              name={pics[2].name}
              id_pic={pics[2].id_pic}
              changeTitleButton={() =>
                this.changeStateTitleHandler(pics[2].name)
              } */}
          </div>
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

// const buttonClick = document.querySelector(".buttonClick");
// buttonClick?.addEventListener("click", () => {
//   console.log("buttonClick");
// });

export default App;
