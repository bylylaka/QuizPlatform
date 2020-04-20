const FormNames = {
  RegistrationForm: {
    name: "RegistrationForm",
    fieldNames: {
      email: "email",
      password: "password",
      errorMessage: "errorMessage"
    }
  },
  LoginForm: {
    name: "LoginForm",
    fieldNames: {
      email: "email",
      password: "password",
      errorMessage: "errorMessage"
    }
  },
  ProfileInfoForm: {
    name: "ProfileInfoForm",
    fieldNames: {
      avatar: "avatar",
      name: "name",
      email: "email",
      age: "age",
      gender: "gender",
      birth: "birth",
      country: "country"
    }
  },
  CreateQuizForm: {
    name: "createQuizForm"
  },
  AnswerQuizForm: {
    name: "answerQuizForm"
  },
  filterAnswers: {
    name: "filterAnswers",
    fieldNames: {
      country: "country"
    }
  }
};

export default FormNames;
