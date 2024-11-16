import catchAsync from "../../../shared/catchAsyncs";

const getFormInfo = catchAsync(async (req, res, next) => {
  const { formName, formActive } = req.body;
  console.log(formName, formActive);
  res.status(200).json({
    data: { formName, formActive },
    success: true,
    message: "Form created successfully",
  });
});

export const FormController = {
  getFormInfo,
};
