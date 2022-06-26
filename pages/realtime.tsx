import { Component } from "react";
import styles from "../styles/Realtime.module.css";

interface Data {
  data: string | undefined;
}

export default class Realtime extends Component<{}, Data> {
  interval: NodeJS.Timer;
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      data: undefined,
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
          <h1 className={styles.text}>{this.state.data}</h1>
          <input id="textInput" type="text" placeholder="Type something..." />
        </div>
      </body>
    );
  }
}
