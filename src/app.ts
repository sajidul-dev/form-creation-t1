import express, { Application, Request, Response } from "express";
import cors from "cors";
import routes from "./app/routes";
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", routes);

app.get("/", async (req: Request, res: Response) => {
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
      questions: [
        {
          _id: "67388877751cceeb58bf01f0",
          isDeleted: false,
          isActive: true,
          question: "[sp]Form Name[/sp]",
          isRequired: false,
          questionType: "text",
          displayOrder: 0,
          text: { subType: "shorttext" },
        },
        {
          _id: "673888a6751cceeb58bf01f5",
          isDeleted: false,
          isActive: false,
          questionType: "choice",
          question: "[sp]Form Active[/sp]",
          displayOrder: 1,
          isRequired: false,
          choice: {
            subType: "yesno",
            options: [
              {
                _id: "673888a6751cceeb58bf01f3",
                defaultText: "Yes",
                text: "Yes",
              },
              {
                _id: "673888a6751cceeb58bf01f4",
                defaultText: "No",
                text: "No",
              },
            ],
            defaultValue: ["673888a6751cceeb58bf01f4"],
            optionText: "Yes\nNo",
          },
        },
      ],
      userId: "6738849f6e0e672eaa52877e",
      calculators: [],
      url: "my-fabulous-form",
    },
    answer: {
      userId: "6738849f6e0e672eaa52877e",
      userInfo: { username: "mdsajidulalam", fullname: "Md Sajidul Alam" },
      formId: "6738885185c1c7cb0b561719",
      hasHookTrigger: true,
      answers: [
        { q: "67388877751cceeb58bf01f0", t: "Password" },
        {
          q: "673888a6751cceeb58bf01f5",
          c: [{ t: "Yes", v: "673888a6751cceeb58bf01f3" }],
        },
      ],
      formElementAnswers: [],
      answerFiles: [],
      reduceFromStock: null,
      formOwnerEmailConfirmed: true,
      formOwnerLang: "en",
      formOwnerUsername: "mdsajidulalam",
      formOwnerCulture: "en-US",
      formOwnerTimezone: "Bangladesh Standard Time",
      formOwnerDefaultDomain: "xldx9wlr.forms.app",
      publicId: "4b0ca87110a8ae",
      point: null,
      completeSecond: 7,
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
      answerId: "6739aea8bb2cbd5bd746dcd5",
      createDate: "2024-11-17T08:51:52.964Z",
    },
  };
  const answer = response.answer.answers;
  const tValues = answer.map((obj) => obj.t || (obj.c && obj.c[0]?.t));
  console.log(tValues, "Tval");
  res.send("Hello World!");
});

export default app;
