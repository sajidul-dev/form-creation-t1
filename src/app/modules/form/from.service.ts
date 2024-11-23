import axios from "axios";
import { IFormType } from "./form.interface";
import { authorization, getFormObj } from "./from.utils";

const createForm = async (data: IFormType) => {
  // const formData = JSON.stringify(data);
  const formData = getFormObj(data);
  // const answer = data.answer.answers;
  // const tValues = answer.map((obj) => obj.t || (obj.c && obj.c[0]?.t));
  // const formData = {
  //   formName: tValues[0],
  //   formActive: tValues[1],
  // };
  // token
  const profile = {
    email: "mdsajidulalam1245@gmail.com",
    password: "12345678Aa@",
  };
  const token = authorization(profile);
  let message;
  console.log(formData, "FormData");
  console.log(token, "Token");
  if (token) {
    console.log(token, "Token inside if block");
    try {
      axios.post(
        `https://api.123formbuilder.com/v2/forms?JWT=${token}&name=${formData.formName}`
      );
      message = "Form created";
    } catch (err) {
      console.log(err);
      message = "Form not created";
    }
  }
  //create form

  return message;
};

export const FormService = { createForm };
