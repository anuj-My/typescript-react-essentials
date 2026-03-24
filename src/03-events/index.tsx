import { useState } from "react";

type Person = {
  name: string;
};

const Component = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData);
    const data = Object.fromEntries(formData);
    console.log(data);
    const text = formData.get("text") as string;
    const person: Person = { name: text };
  };
  return (
    <section>
      <h2>Events Example</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input mb-1"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="email"
          className="form-input mb-1"
          value={email}
          name="email"
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Component;
