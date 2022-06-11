import { Component } from "react";
import Head from "next/head";

type Timer = {
  time: Object;
};

export default class Time extends Component<{}, Timer> {
  interval: NodeJS.Timer;
  constructor(props: any) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }
  changeTime() {
    this.setState({
      time: new Date(),
    });
  }
  componentDidMount() {
    this.interval = setInterval(() => this.changeTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <>
        <Head>
          <title>Current Time</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <h1>{this.state.time.toLocaleString()}</h1>
      </>
    );
  }
}
