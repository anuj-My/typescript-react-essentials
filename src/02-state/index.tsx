import { useState } from "react";

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks = [
  {
    id: 1,
    url: "some url",
    text: "some content",
  },
  {
    id: 2,
    url: "some url",
    text: "some content",
  },
  {
    id: 3,
    url: "some url",
    text: "some content",
  },
];

const Component = () => {
  const [text, setText] = useState("some Content");

  const [list, setList] = useState<string[]>([]);

  const [links, setLinks] = useState<Link[]>(navLinks);
  return (
    <div>
      <h2>{text}</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          setText("change state");
          setList(["helo", "peter"]);
          setLinks([...links, { id: 4, url: "hello", text: "dsoakllk" }]);
        }}
      >
        click me
      </button>
    </div>
  );
};

export default Component;
