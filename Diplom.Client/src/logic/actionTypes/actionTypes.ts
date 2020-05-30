const ActionTypes = {
  //store actions
  SET_APPSNACKBAR_MESSAGE: "SET_APPSNACKBAR_MESSAGE",
  SET_AUTHORIZED: "SET_AUTHORIZED",
  SET_MY_PROFILE_SIMPLIFIED: "SET_MY_PROFILE_SIMPLIFIED",
  SET_USER: "SET_USER",
  SET_TITLE: "SET_TITLE",
  SET_ACTIVE_HEADER_COMPONENTS: "SET_ACTIVE_HEADER_COMPONENTS",
  SET_SEARCH_USERS: "SET_SEARCH_USERS",
  SET_SEARCH_QUIZES: "SET_SEARCH_QUIZES",
  SET_QUIZ: "SET_QUIZ",
  SET_USER_QUIZ_LIST: "SET_USER_QUIZ_LIST",
  SET_QUIZ_STATISTIC: "SET_QUIZ_STATISTIC",
  SET_QUIZ_FILTERED_STATISTIC: "SET_QUIZ_FILTERED_STATISTIC",
  SET_SUBSCRIPTION_STATUS: "SET_SUBSCRIPTION_STATUS",
  SET_SITE_NOTIFICATIONS: "SET_SITE_NOTIFICATIONS",

  //saga actions
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  LOGOUT: "LOGOUT",
  CHECK_AUTHORIZED: "CHECK_AUTHORIZED",
  GET_USER: "GET_USER",
  GET_MY_PROFILE_SIMPLIFIED: "GET_MY_PROFILE_SIMPLIFIED",
  UPDATE_PROFILE: "UPDATE_PROFILE",
  SEARCH: "SEARCH",
  GET_QUIZ: "GET_QUIZ",
  CREATE_QUIZ: "CREATE_QUIZ",
  ANSWER_QUIZ: "ANSWER_QUIZ",
  LOAD_USER_QUIZ_LIST: "LOAD_USER_QUIZ_LIST",
  LOAD_QUIZ_STATISTIC: "LOAD_QUIZ_STATISTIC",
  FILTER_QUIZ_STATISTIC: "FILTER_QUIZ_STATISTIC",
  GET_SUBSCRIPTION_STATUS: "GET_SUBSCRIPTION_STATUS",
  CHANGE_SUBSCRIPTION_STATUS: "CHANGE_SUBSCRIPTION_STATUS",
  LOAD_SITE_NOTIFICATOINS: "LOAD_SITE_NOTIFICATOINS",
  UPDATE_NOTIFICATIONS_OPENED_STATUS: "UPDATE_NOTIFICATIONS_OPENED_STATUS",
};

export default ActionTypes;
