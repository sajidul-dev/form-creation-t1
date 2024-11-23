import { FormType } from "./form.interface";

export const getFromObj = (data: FormType) => {
  const form = {
    formName: "",
    formActive: "",
  };

  const answer = data.answer.answers;
  answer.map((item: any) => {
    console.log(item.t || (item.c && item.c[0]?.t));
    if (item.t) {
      form.formName = item.t;
    } else if (item.c) {
      form.formActive = item.c[0]?.t;
    }
  });

  return form;
};
