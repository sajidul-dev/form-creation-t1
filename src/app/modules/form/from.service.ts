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

  if (await token) {
    try {
      axios.post(
        `https://api.123formbuilder.com/v2/forms?JWT=${await token}&name=${
          formData.formName
        }`
      );
    } catch (err) {
      console.log(err);
    }
  }
  //create form
};
