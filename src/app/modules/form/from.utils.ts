import axios from "axios";
import { IFormType } from "./form.interface";

export const getFormObj = (data: IFormType) => {
  const formData = {
    formName: "",
    formActive: "",
  };

  const answer = data.answer.answers;
  answer.map((item: any) => {
    console.log(item.t || (item.c && item.c[0]?.t));
    if (item.t) {
      formData.formName = item.t;
    } else if (item.c) {
      formData.formActive = item.c[0]?.t;
    }
  });

  return formData;
};

export const authorization = async (profile: {
  email: string;
  password: string;
}): Promise<string | null> => {
  let token = null;
  await axios
    .post(
      `https://api.123formbuilder.com/v2?email=${profile.email}&password=${profile.password}`
    )
    .then((res) => {
      console.log(res.data, "res");
      token = res.data.token;
    });
  return token;
};
