/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import Demo, { props as P } from "react-demo";
import ReactTags from "../src";

const tags = [
  {
    id: 1,
    label: "Tag 1",
    color: "#2db7f5",
  },
  {
    id: 2,
    label: "Tag 2",
    color: "red",
  },
  {
    id: 3,
    label: "Tag 3",
  },
  {
    id: 4,
    label: "Tag 4",
    color: "#87d068",
  },
  {
    id: 5,
    label: "Tag 5",
    color: "#108ee9",
  },
];

function App() {
  return (
    <Demo
      target={ReactTags}
      fullWidth
      props={{
        tags: P.constant(tags),
        color: P.bool(true),
        addable: P.bool(true),
        closable: P.bool(true),
        outline: P.bool(false),
        inputPlaceholder: P.string("Add a tag"),
        maxLength: P.number(10),
        onClose: P.callback.log(),
        onChange: P.callback.log(),
      }}
    />
  );
}

export default App;
