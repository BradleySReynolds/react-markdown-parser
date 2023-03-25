import React from "react";
import ReactDOM from "react-dom/client";
import { marked } from "marked";
import "./index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentText:
        "# Welcome to my Markdown Parser\n## My name is Bradley Reynolds!\n### I am an aspiring self-taught frontend developer\nHere is an example of **bold text**\n\nHere is an example of *italicized text*\n\nThis is an example of a quoteblock:\n>Do or do not, there is no try.\n\nHere is an example of an ordered list:\n\n- First Item\n\n - Second Item\n\n - Third Item\n\nHere is an example of an ordered list\n\n1. First Item\n\n2. Second Item\n\n3. Third Item\n\nHere is an example of code:\n\n`console.log('hello world')`\n\nHere is an example of a horizontal Rule:\n\n---\n\nHere is an example of a link:\n\n[My Personal Website](https://www.bradleysreynolds.com)\n\nHere is an example of image:\n\n![image of a kitty](https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png)",
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange = (e) => {
    this.setState({
      currentText: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="App">
          <div className="text-con">
            <h2 className="text-head">Type Markdown Here:</h2>
            <p>
              For a cheatsheet on Markdown, click <a href="#cheatsheet">here</a>
              .
            </p>
            <textarea
              className="text-area"
              value={this.state.currentText}
              onChange={this.onChange}
            />
          </div>
          <div className="parsed-con">
            <h2 className="parsed-head">Parsed Markdown:</h2>
            <div
              className="parsed-area"
              dangerouslySetInnerHTML={{
                __html: marked.parse(this.state.currentText),
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
