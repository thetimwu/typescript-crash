import React, { useState } from "react";

interface Props {
  name: string;
  age: number;
  getName: () => string;
}

export const TextField: React.FC<Props> = () => {
  const [count, setcount] = useState<number | null>(0);

  return <div>Person Component</div>;
};
