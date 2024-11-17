import catchAsync from "../../../shared/catchAsyncs";

const getFormInfo = catchAsync(async (req, res, next) => {
  // const { formName, formActive } = req.body;
  // console.log(formName, formActive);
  const { ...fromdata } = req.body;
  console.log(fromdata, "Request from api");
  res.status(200).json({
    data: JSON.stringify(fromdata),
    success: true,
    message: "Form created successfully",
  });
});

export const FormController = {
  getFormInfo,
};
