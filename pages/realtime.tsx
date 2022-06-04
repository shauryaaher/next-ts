import { Component } from "react";

export default class Realtime extends Component<{}, { data: string }> {
  interval: NodeJS.Timer;
  constructor(props: any) {
    super(props);
    this.state = {
      data: "",
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        data: (document.querySelector("#textInput") as HTMLInputElement)!.value,
      });
    }, 0);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <body>
        <style jsx>
          {`
            body {
              background-color: black;
            }
          `}
        </style>
        <div>
          <h1>{this.state.data}</h1>
          <input id="textInput" type="text" placeholder="Type something..." />
        </div>
      </body>
    );
  }
}
