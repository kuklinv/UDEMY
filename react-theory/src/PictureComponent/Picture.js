import React, {Component} from "react";
import "./Picture.css";
// import Radium from "radium";
import addRootClass from "../hoc/addRootClass";
import PropTypes from 'prop-types';

class Picture extends Component {
    // super({props})
    constructor(props) {
        super(props);
        this.state = {}
    }
    // react life cycle component
    // shouldComponentUpdate(nextProps, nextState) {
    // optimization app  - test  - need change and re-render component or not
    //   return this.nextProps.name.trim() !== this.props.name.trim();
    // }

    // in Rect 16.3+ new life cycle methods (2)

    componentDidMount() {
        if (this.props.index === 0) {
            this.inputRef.focus();
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return prevState; // if don't change state, ore return result object - new state, witch will be merged with origin state
    }

    getSnapshotBeforeUpdate() {
        console.log(
            "for example for remembering cursor position before render and for rerender later"
        );
    }

    render(props) {
        const inputClasses = ["input"];

        // for example ErrorBoundary hi class
        // if (Math.random() > 0.7) {
        //   throw new Error("Something went wrong");
        // }

        if (this.props.name !== "") {
            inputClasses.push("green");
        } else {
            inputClasses.push("red");
        }

        if (this.props.name.length > 4) {
            inputClasses.push("bold");
        }

        // its need to use Radium - change components style with action at component
        // const inlineStyleEx = {
        //   border: "1px solid #ccc",
        //   boxShadow: "0 4px 5 px 0 rgba(0, 0, 0, 0.14)",
        //   ":hover": {
        //     border: "1px solid #aaa",
        //     boxShadow: "0 4px 15 px 0 rgba(0, 0, 0, 0.25)",
        //     cursor: "pointer",
        //   },
        //   display: "inline-block",
        //   margin: "1em",
        // };

        // return (
        //   <div className="basePic">
        //        {/*// style={inlineStyleEx}>*/}
        //     <div className="pic">
        //       <h4>name: {this.props.name}</h4>
        //       <p>id: {this.props.id_pic}</p>
        //       {this.props.children}
        //       <input
        //         type="text"
        //         onChange={this.props.onChangeName}
        //         value={this.props.name}
        //         className={inputClasses.join(" ")}
        //       />
        //       {/* <button onClick={this.props.changeTitleButton}>click</button> */}
        //       <button onClick={this.props.onDelete}>delete</button>
        //     </div>
        //   </div>
        // );
// using hic addRootClass
        return (
            <React.Fragment>
                {/*// style={inlineStyleEx}>*/}
                <div className="pic">
                    <h4>name: {this.props.name}</h4>
                    <p>id: {this.props.id_pic}</p>
                    {this.props.children}
                    <input
                        type="text"
                        ref={(inputRef) => this.inputRef = inputRef}
                        onChange={this.props.onChangeName}
                        value={this.props.name}
                        className={inputClasses.join(" ")}
                    />
                    {/* <button onClick={this.props.changeTitleButton}>click</button> */}
                    <button onClick={this.props.onDelete}>delete</button>
                </div>
            </React.Fragment>
        );
    }
}

// using Radium
// export default Radium(Picture);
// export default Picture;

Picture.propTypes = {
    name: PropTypes.string.isRequired, // need value
    id_pic: PropTypes.number,
    index: PropTypes.number,
    onDelete: PropTypes.func,
    onChangeName: PropTypes.func
}

export default addRootClass(Picture);

