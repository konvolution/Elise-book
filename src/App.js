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
  return (
    <div className="App">
      <FlipPage
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
          </article>
        ))}
        <article className="App-Page-Last" key={pages.length}>
          <h1>The End</h1>
        </article>
      </FlipPage>
    </div>
  );
}
