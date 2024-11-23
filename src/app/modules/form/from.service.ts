import axios from "axios";
import { IFormType } from "./form.interface";
import { authorization, getFormObj } from "./from.utils";
import config from "../../../config";

const createForm = async (data: IFormType) => {
  const formData = getFormObj(data);
  const profile = {
    email: config.formBuilder.email,
    password: config.formBuilder.password,
  };
  const token = await authorization(profile);
  let message;

  if (token) {
    try {
      axios.post(
        `https://api.123formbuilder.com/v2/forms?JWT=${token}&name=${formData.formName}`
      );
      message = "Form created";
    } catch (err) {
      message = "Form not created";
    }
  } else {
    console.log("Failed to retrieve token.");
  }

  return message;
};

export const FormService = { createForm };
