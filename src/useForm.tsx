import { useState } from "react";

import React from "react";

type FormInput = {
  name: string;
  password: string;
};

export const useForm = (
  init: FormInput
): [FormInput, (event: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [{ name, password }, setValue] = useState<FormInput>(init);
  return [
    { name, password },
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setValue({
        ...{ name, password },
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
  ];
};
