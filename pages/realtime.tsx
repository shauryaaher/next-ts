import Link from "next/link";
import Head from "next/head";
import { Component } from "react";
import styles from "../styles/Realtime.module.scss";

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
      <>
      <Head>
        <title>Realtime text</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
        <body>
          <style jsx global>
            {`
              body {
                background-color: black;
              }
            `}
          </style>
          <div className={styles.main}>
            <h1 className={styles.text}>{this.state.data}</h1>
            <input id="textInput" type="text" placeholder="Type something..." />
            <br />
            <br />
          </div>
          <Link href="/">
            <a className={styles.link}>Go to homepage</a>
          </Link>
        </body>
      </>
    );
  }
}
