import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

function gettime() {
  return (
    "Today at " +
    faker.date.between("2020-01-01", "2020-12-31").toLocaleTimeString()
  );
}

function getComment() {
  return {
    c1:
      "The hours, minutes and seconds stand as visible reminders that your effort put them all there.Preserve until your next run, when the watch lets you see how Impermanent your efforts are.",
    c2:
      "This will be great for business reports. I will definitely download this.",
    c3:
      "I am very interested in this motherboard. Do you know if it did work in a Intel LGA775 CPU socket?",
    c4: "This has been very useful for my research. Thanks as well!",
    c5: "Elliot you are always so right :)",
    c6: "Dude, this is awesome. Thanks so much",
  };
}
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails
          author="Sam"
          commentTime={gettime()}
          userComment={getComment().c1}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          author="Amir"
          commentTime={gettime()}
          userComment={getComment().c2}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <CommentDetails
        author="Jayam"
        commentTime={gettime()}
        userComment={getComment().c3}
        avatar={faker.image.avatar()}
      />
      <CommentDetails
        author="Christian Rocha"
        commentTime={gettime()}
        userComment={getComment().c4}
        avatar={faker.image.avatar()}
      />
      <CommentDetails
        author="Jenny Hess"
        commentTime={gettime()}
        userComment={getComment().c5}
        avatar={faker.image.avatar()}
      />
      <CommentDetails
        author="Joe Henderson"
        commentTime={gettime()}
        userComment={getComment().c6}
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
