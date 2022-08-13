import { Component } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Time.module.scss";

type Timer = {
  time: Object;
};

export default class Time extends Component<{}, Timer> {
  interval: NodeJS.Timer;
  constructor(props: {} | Readonly<{}>) {
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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <h1>{this.state.time.toLocaleString()}</h1>
        <Link href="/">
          <a className={styles.aLink}>Go to homepage</a>
        </Link>
      </>
    );
  }
}
