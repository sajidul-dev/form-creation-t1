import express, { Application, Request, Response } from "express";
import cors from "cors";
import routes from "./app/routes";
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", routes);

app.get("/", (req: Request, res: Response) => {
  const response = {
    form: {
      baseSettings: {
        removeBranding: false,
        steps: false,
        isRtl: false,
        autoPassSingle: true,
        backButton: false,
        cardDesignFadeIn: false,
        isEnabledSaveAsDraft: false,
        isEnabledSignupForSaveAsDraft: false,
        isEnabledMessages: true,
        isShouldShowCookieModal: false,
        hideCaptcha: false,
        forceShowCaptchaFromAdmin: false,
        preventMultipleSubmissions: false,
        cardDesign: false,
      },
      hasEmailNotification: false,
      pushNotification: false,
      hasWebhookTrigger: true,
      _id: "6738885185c1c7cb0b561719",
      title: "My Fabulous Form ✨",
      questions: [[Object], [Object]],
      userId: "6738849f6e0e672eaa52877e",
      calculators: [],
      url: "my-fabulous-form",
    },
    answer: {
      userId: "6738849f6e0e672eaa52877e",
      userInfo: { username: "mdsajidulalam", fullname: "Md Sajidul Alam" },
      formId: "6738885185c1c7cb0b561719",
      hasHookTrigger: true,
      answers: [[Object], [Object]],
      formElementAnswers: [],
      answerFiles: [],
      reduceFromStock: null,
      formOwnerEmailConfirmed: true,
      formOwnerLang: "en",
      formOwnerUsername: "mdsajidulalam",
      formOwnerCulture: "en-US",
      formOwnerTimezone: "Bangladesh Standard Time",
      formOwnerDefaultDomain: "xldx9wlr.forms.app",
      publicId: "2e5a2f4b9d4713",
      point: null,
      completeSecond: 14,
      draftId: null,
      formVersion: 2,
      formTitle: "My Fabulous Form ✨",
      currentUserId: "6738849f6e0e672eaa52877e",
      thankYouPageSettings: {
        _id: "67388851751cceeb58bf01ed",
        title: "Ending",
        desc: "[h1]👌[/h1][h2][b]Thank you! [/b][/h2][p]You submitted the form successfully.[/p]",
        showThankYouPage: true,
        showShare: false,
        showPublicId: false,
        showPrintButton: false,
        showStatistic: false,
        redirectAfterSubmit: false,
        isSaveAndReturn: false,
        isShareRecords: false,
        isShowResponseCount: false,
        redirectUrl: "",
        popupTitle: "",
        popupText: "",
        popupBtnText: "",
      },
      answerId: "6739a8a2bb2cbd5bd746d953",
      createDate: "2024-11-17T08:26:10.132Z",
    },
  };
  const answer = response.answer.answers;
  answer.map((item: any) => {
    // if (item.type === "checkbox") {
    // const value = item.value.split(",");
    // item.value = value;
    // }
    console.log(item[0]);
  });
  // console.log(answer);
  res.send("Working.....!");
});

export default app;
