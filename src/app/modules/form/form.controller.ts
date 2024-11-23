import catchAsync from "../../../shared/catchAsyncs";

const createForm = catchAsync(async (req, res, next) => {
  // const { formName, formActive } = req.body;
  // console.log(formName, formActive);
  const { ...data } = req.body;
  console.log(JSON.stringify(data), "Request from api");

  const formData = JSON.stringify(data);

  res.status(200).json({
    data: JSON.stringify(formData),
    success: true,
    message: "Form created successfully",
  });
});

export const FormController = {
  createForm,
};
