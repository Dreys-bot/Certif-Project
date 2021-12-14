

const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: defaultText
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  
  render() {
    return (
       <div>
         <GetInput
           input={this.state.inputValue}
           handleChange={this.handleChange}
          />
         <RenderInput
           input={marked(this.state.inputValue)}
          />
       </div>
    );
  }
}

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className = "edit">
        <h3>Get Input:</h3>
        <hr></hr>
        <textarea id="editor"
          value={this.props.input}  
          onChange={this.props.handleChange}
         />
        <hr></hr>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className = "previews">
        <h3>Input Render:</h3>
        <hr></hr>
        <p id="preview"
          dangerouslySetInnerHTML={{ __html: this.props.input }}
          />
        <hr></hr>
      </div>
    );
  }
};


ReactDOM.render(<MyApp />, document.getElementById('App'));
