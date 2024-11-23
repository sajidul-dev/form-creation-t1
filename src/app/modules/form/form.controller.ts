import catchAsync from "../../../shared/catchAsyncs";
import { FormService } from "./from.service";

const createForm = catchAsync(async (req, res, next) => {
  // const { formName, formActive } = req.body;
  // console.log(formName, formActive);
  const { ...data } = req.body;
  // console.log(JSON.stringify(data), "Request from api");

  // const formData = JSON.stringify(data);
  const message = await FormService.createForm(data);
  console.log(message, "Message from controller");

  res.status(200).json({
    data: JSON.stringify(message),
    success: true,
    message: "Form created successfully",
  });
});

export const FormController = {
  createForm,
};
