import catchAsync from "../../../shared/catchAsyncs";
import { FormService } from "./from.service";

const createForm = catchAsync(async (req, res, next) => {
  const { ...data } = req.body;

  const message = await FormService.createForm(data);

  res.status(200).json({
    data: JSON.stringify(message),
    success: true,
    message: "Form created successfully",
  });
});

export const FormController = {
  createForm,
};
