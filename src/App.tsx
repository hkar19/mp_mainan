import React from "react";
import { createUseStyles } from "react-jss";
import { getRandomColor } from "./hook/getRandomColor";
import useWindowDimensions from "./hook/useWindowDimensions";

const stickybarHeight = 80;

const lyrics: {
  text: string;
}[] = [
  {
    text: "Never gonna give you up",
  },
  {
    text: "Never gonna let you down",
  },

  {
    text: "Never gonna run around and desert you",
  },
  {
    text: "Never gonna make you cry",
  },
  {
    text: "Never gonna say goodbye",
  },
  {
    text: "Never gonna tell a lie and hurt you",
  },
];

const colors = ["red", "blue", "green", "magenta", "wheat"];

const useSlideDownStyles = createUseStyles({
  nav: {
    position: "fixed",
    height: stickybarHeight,
    backgroundColor: "wheat",
    top: 0,
    left: 0,
    right: 0,
    "&>p": {
      margin: "0 auto",
      textAlign: "center",
      fontWeight: 600,
    },
  },
  sectionContainer: {
    scrollSnapType: "y mandatory",
    overflowY: "scroll",
    height: "100vh",
  },
  section: {
    scrollSnapAlign: "start",
    paddingTop: 0,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

function App() {
  const { height } = useWindowDimensions();
  const classes = useSlideDownStyles();

  const sectionHeight = height - stickybarHeight;
  console.log({ height });

  return (
    <div style={{}}>
      <nav className={classes.nav}>
        <p>Never Gonna Give You Up</p>
      </nav>
      <article className={classes.sectionContainer}>
        {lyrics.map(({ text }, idx, arr) => {
          let first = idx === 0;
          let last = arr.length - 1 === idx;
          return (
            <section
              className={classes.section}
              style={{
                paddingTop: stickybarHeight,
                height,
                backgroundColor: colors[idx % colors.length],
              }}
              key={`${idx}-${text}`}
            >
              {!first && <p>{arr[idx - 1].text}</p>}
              <h1 style={{ margin: 0 }}>{text}</h1>
              {!last && <p>{arr[idx + 1].text}</p>}
            </section>
          );
        })}
      </article>
    </div>
  );
}

export default App;
