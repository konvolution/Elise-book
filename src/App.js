import * as React from "react";
import "./styles.css";
import FlipPage from "react-flip-page";

const pages = [
  require("./assets/Elise book - title page - cropped.jpg"),
  require("./assets/Elise book - pages 1-2 - cropped.jpg"),
  require("./assets/Elise book - pages 3-4 - cropped.jpg"),
  require("./assets/Elise book - pages 5-6 - cropped.jpg"),
  require("./assets/Elise book - pages 7-8 - cropped.jpg")
];

export default function App() {
  const refBook = React.useRef();

  React.useEffect(() => {
    document.body.addEventListener("keydown", (evt) => {
      switch (evt.which) {
        case 37:
          refBook.current.gotoPreviousPage();
          break;

        case 39:
          refBook.current.gotoNextPage();
          break;

        default:
          break;
      }
    });
  }, []);

  return (
    <div className="App">
      <FlipPage
        ref={refBook}
        className="App-Book"
        orientation="horizontal"
        width={800}
        height={500}
      >
        {pages.map((page, index) => (
          <article key={index}>
            <img
              style={{ width: "100%" }}
              src={page}
              alt={
                index === 0 ? "title" : `pages ${index * 2 - 1}-${index * 2}`
              }
            />
            {index === 0 && (
              <div className="App-Title">
                <h1>Story by</h1>
                <h1>Elise Demoore</h1>
              </div>
            )}
          </article>
        ))}
        <article className="App-Page-Last" key={pages.length}>
          <h1>The End</h1>
        </article>
      </FlipPage>
    </div>
  );
}
