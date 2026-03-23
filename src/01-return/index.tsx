import { type PropsWithChildren } from "react";
// type ComponentProps = {
//   name: string;
//   result: number;
//   children?: React.ReactNode;
// };
type ComponentProps = PropsWithChildren<{
  name: string;
  result: number;
}>;

const Component = ({ name, result, children }: ComponentProps) => {
  return (
    <div>
      <h2>{result}</h2>
      <h1>{name}</h1>
      {children}
    </div>
  );
};

export default Component;
