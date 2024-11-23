export type IFormType = {
  form: {
    baseSettings: {
      removeBranding: boolean;
      steps: boolean;
      isRtl: boolean;
      autoPassSingle: boolean;
      backButton: boolean;
      cardDesignFadeIn: boolean;
      isEnabledSaveAsDraft: boolean;
      isEnabledSignupForSaveAsDraft: boolean;
      isEnabledMessages: boolean;
      isShouldShowCookieModal: boolean;
      hideCaptcha: boolean;
      forceShowCaptchaFromAdmin: boolean;
      preventMultipleSubmissions: boolean;
      cardDesign: boolean;
    };
    hasEmailNotification: boolean;
    pushNotification: boolean;
    hasWebhookTrigger: boolean;
    _id: string;
    title: string;
    questions: {
      _id: string;
      isDeleted: boolean;
      isActive: boolean;
      question: string;
      isRequired: boolean;
      questionType: "text" | "choice";
      displayOrder: number;
      text?: {
        subType: "shorttext";
      };
      choice?: {
        subType: "yesno";
        options: {
          _id: string;
          defaultText: string;
          text: string;
        }[];
        defaultValue: string[];
        optionText: string;
      };
    }[];
    userId: string;
    calculators: any[];
    url: string;
  };
  answer: {
    userId: string;
    userInfo: {
      username: string;
      fullname: string;
    };
    formId: string;
    hasHookTrigger: boolean;
    answers: {
      q: string;
      t?: string;
      c?: {
        t: string;
        v: string;
      }[];
    }[];
    formElementAnswers: any[];
    answerFiles: any[];
    reduceFromStock: null | unknown;
    formOwnerEmailConfirmed: boolean;
    formOwnerLang: string;
    formOwnerUsername: string;
    formOwnerCulture: string;
    formOwnerTimezone: string;
    formOwnerDefaultDomain: string;
    publicId: string;
    point: null | unknown;
    completeSecond: number;
    draftId: null | unknown;
    formVersion: number;
    formTitle: string;
    currentUserId: string;
    thankYouPageSettings: {
      _id: string;
      title: string;
      desc: string;
      showThankYouPage: boolean;
      showShare: boolean;
      showPublicId: boolean;
      showPrintButton: boolean;
      showStatistic: boolean;
      redirectAfterSubmit: boolean;
      isSaveAndReturn: boolean;
      isShareRecords: boolean;
      isShowResponseCount: boolean;
      redirectUrl: string;
      popupTitle: string;
      popupText: string;
      popupBtnText: string;
    };
    answerId: string;
    createDate: string;
  };
};
