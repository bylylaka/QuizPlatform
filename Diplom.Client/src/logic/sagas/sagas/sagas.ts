import Actions from "../../actions/actions";
import { call, put, select } from "@redux-saga/core/effects";
import Apis from "../../apis/apis";
import { stopSubmit, reset } from "redux-form";
import FormNames from "../../../GUI/shared/Form/FormNames";
import { AxiosResponse } from "axios";
import User from "../../../shared/models/user/User";
import { AppSnackbarMessage } from "../../../GUI/shared/AppSnackbar/props";
import ProfileSimplifiedViewModel from "../../../shared/models/profile/ProfileSimplifiedViewModel";
import UserSimplified from "../../../shared/models/user/UserSimplified";
import Quiz from "../../../shared/models/quiz/Quiz";
import QuizSearch from "../../../shared/models/quiz/QuizSearch";
import customHistory from "../../../GUI/routes/CustomHistory";
import Selectors from "../../selectors/selectors";
import StatisticQuiz from "../../../shared/models/quiz/StatisticQuiz";
import _ from "lodash";
import StatisticQuestion from "../../../shared/models/quiz/StatisticQuestion";
import StatisticAnswer from "../../../shared/models/quiz/StatisticAnswer";
import StatisticFilter from "../../../shared/models/quiz/Filter/StatisticFilter";
import { userInfo } from "os";
import ChildsCount from "../../../shared/models/quiz/Filter/ChildsCount";
import Salary from "../../../shared/models/quiz/Filter/Salary";
import moment from "moment";
import SiteNotification from "../../../shared/models/notification/SiteNotification";

export const Sagas = {
  *loginSaga(action: ReturnType<typeof Actions.login>) {
    const response: AxiosResponse<ProfileSimplifiedViewModel> = yield call(
      Apis.login,
      action.values
    );
    if (response.status != 200) {
      yield put(
        stopSubmit(FormNames.LoginForm.name, {
          errorMessage: "Неверная комбинация емейла или пароля.",
        })
      );
    } else {
      window.location.href = `/user/${response.data.id}`;
    }
  },

  *registerSaga(action: ReturnType<typeof Actions.register>) {
    const response: AxiosResponse<ProfileSimplifiedViewModel> = yield call(
      Apis.register,
      action.values
    );
    if (response.status != 200) {
      yield put(
        stopSubmit(FormNames.RegistrationForm.name, {
          errorMessage: "Пользователь с таким емейлом уже существует.",
        })
      );
    } else {
      window.location.href = `/user/${response.data.id}`;
    }
  },

  *logoutSaga(action: ReturnType<typeof Actions.logout>) {
    const response: AxiosResponse = yield call(Apis.logout);
    window.location.reload();
  },

  *getMyProfileSimplifiedSaga(
    action: ReturnType<typeof Actions.getMyProfileSimplified>
  ) {
    const response: AxiosResponse<ProfileSimplifiedViewModel> = yield call(
      Apis.getMyProfileSimplified
    );
    yield put(Actions.setMyProfileSimplified(response.data));
  },

  *getUserSaga(action: ReturnType<typeof Actions.getUser>) {
    const response: AxiosResponse<User> = yield call(Apis.getUser, action.id);
    yield put(Actions.setUser(response.data));
  },

  *updateProfileSaga(action: ReturnType<typeof Actions.updateProfile>) {
    let formData = new FormData();

    for (var key in action.profile) {
      formData.append(key, (action.profile as any)[key]);
    }

    const response: AxiosResponse<User> = yield call(
      Apis.updateProfile,
      formData as any
    );

    const snackbarMessage = new AppSnackbarMessage(
      "Данные успешно обновлены.",
      "success"
    );
    yield put(Actions.setAppSnackbarMessage(snackbarMessage));
  },

  *searchSaga(action: ReturnType<typeof Actions.search>) {
    if (!action.string) {
      yield put(Actions.setSearchUsers([]));
      return;
    }
    const responseUsers: AxiosResponse<UserSimplified[]> = yield call(
      Apis.searchUsers,
      action.string
    );
    const responseQuizes: AxiosResponse<QuizSearch[]> = yield call(
      Apis.searchQuizes,
      action.string
    );
    yield put(Actions.setSearchUsers((responseUsers.data as any).users));
    yield put(Actions.setSearchQuizes(responseQuizes.data));
  },

  *getQuizSaga(action: ReturnType<typeof Actions.getQuiz>) {
    const response: AxiosResponse<Quiz> = yield call(Apis.getQuiz, action.id);
    if (response.status != 200) {
      return;
    }
    yield put(Actions.setQuiz(response.data));
  },

  *createQuizSaga(action: ReturnType<typeof Actions.createQuiz>) {
    const response: AxiosResponse<boolean> = yield call(
      Apis.createQuiz,
      action.quiz
    );

    let message = new AppSnackbarMessage("Опрос успешно создан!", "success");
    yield put(Actions.setAppSnackbarMessage(message));

    const profile: ProfileSimplifiedViewModel = yield select(
      Selectors.myProfileSimplified
    );
    customHistory.push(`/user/${profile.id}`);
  },

  *answerQuizSaga(action: ReturnType<typeof Actions.answerQuiz>) {
    const response: AxiosResponse = yield call(Apis.answerQuiz, action.answers);
    const snackbarMessage = new AppSnackbarMessage(
      "Данные успешно обновлены.",
      "success"
    );
    yield put(Actions.setAppSnackbarMessage(snackbarMessage));
    customHistory.goBack();
  },

  *checkAuthorizedSaga(action: ReturnType<typeof Actions.checkAuthorized>) {
    const response: AxiosResponse<boolean> = yield call(Apis.IsAuthorized);
    yield put(Actions.setAuthorized(response.data));
  },

  *loadUserQuizListSaga(action: ReturnType<typeof Actions.loadUserQuizList>) {
    const response: AxiosResponse<Quiz[]> = yield call(
      Apis.getUserQuizList,
      action.userId
    );
    yield put(Actions.setUserQuizList(response.data));
  },

  *loadQuizStatisticSaga(action: ReturnType<typeof Actions.loadQuizStatistic>) {
    const response: AxiosResponse<StatisticQuiz> = yield call(
      Apis.loadQuizStatistic,
      action.quizId
    );
    yield put(Actions.setQuizStatistic(response.data));
    yield put(Actions.setQuizFilteredStatistic(response.data));
  },

  *filterQuizStatisticSaga(
    action: ReturnType<typeof Actions.filterQuizStatistic>
  ) {
    const statistic: StatisticQuiz = yield select(Selectors.quizStatistic);
    const filteredStatistic = _.cloneDeep(statistic);

    if (!filteredStatistic.questions) {
      return;
    }

    const participants = _.uniqBy(
      filteredStatistic.questions
        .map((question: StatisticQuestion) => {
          return question.answers.map(
            (answer: StatisticAnswer) => answer.participant
          );
        })
        .flat(),
      (participant: User) => participant.id
    );

    var allowedParticipants = participants.filter((participant: User) =>
      Sagas.filterStatisticParticipant(participant, action.filter)
    );

    filteredStatistic.questions.forEach((question: StatisticQuestion) => {
      question.answers = question.answers.filter((answer: StatisticAnswer) => {
        return allowedParticipants
          .map((p) => p.id)
          .includes(answer.participant.id);
      });
    });

    yield put(Actions.setQuizFilteredStatistic(filteredStatistic));
  },

  *getSubsctiptionStatusSaga(
    action: ReturnType<typeof Actions.getSubscriptionStatus>
  ) {
    let reponse = yield call(Apis.getSubsctiptionStatus, action.producerId);

    yield put(Actions.setSubscriptionStatus(reponse.data));
  },

  *changeSubsctiptionStatusSaga(
    action: ReturnType<typeof Actions.changeSubscriptionStatus>
  ) {
    let reponse = yield call(
      Apis.changeSubscriptionStatus,
      action.producerId,
      action.status
    );
    yield put(Actions.setSubscriptionStatus(action.status));
  },

  *loadSiteNotificationsSaga() {
    let response: AxiosResponse<SiteNotification[]> = yield call(
      Apis.loadSiteNotifications
    );
    let sortedNotifications = response.data.sort(
      (a, b) =>
        new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
    );
    yield put(Actions.setSiteNotifications(sortedNotifications));
  },

  *updateNotificationsOpenedStatusSaga(
    action: ReturnType<typeof Actions.updateNotificationsOpenedStatus>
  ) {
    yield call(Apis.updateNotificationsOpenedStatus, action.ids);

    let storeNotifications: SiteNotification[] = yield select(
      Selectors.siteNotifications
    );
    let updatedNotifications = storeNotifications.map((n) => {
      return { ...n, wasOpened: true };
    });

    yield put(Actions.setSiteNotifications(updatedNotifications));
  },

  filterStatisticParticipant(participant: User, filter: StatisticFilter) {
    //age
    if (filter.age && (filter.age[0] != 0 || filter.age[1] != 100)) {
      if (participant.birth == null) {
        return false;
      }
      let participantAge = moment().diff(moment(participant.birth), "y");
      if (!(participantAge > filter.age[0] && participantAge < filter.age[1])) {
        return false;
      }
    }
    //gender
    if (!Sagas.compareFilterProperty("gender", participant, filter)) {
      return false;
    }
    //country
    if (!Sagas.compareFilterProperty("country", participant, filter)) {
      return false;
    }
    //city
    if (!Sagas.compareFilterProperty("city", participant, filter)) {
      return false;
    }
    //education
    if (!Sagas.compareFilterProperty("education", participant, filter)) {
      return false;
    }
    //maritalStatus
    if (filter.maritalStatus != null) {
      if (!filter.maritalStatus.includes(participant.maritalStatus as any)) {
        return false;
      }
    }
    //loveAnimals
    if (!Sagas.compareFilterProperty("loveAnimals", participant, filter)) {
      return false;
    }
    //smoke
    if (!Sagas.compareFilterProperty("smoke", participant, filter)) {
      return false;
    }
    //drink
    if (!Sagas.compareFilterProperty("drink", participant, filter)) {
      return false;
    }
    //childsCount
    if (filter.childsCount != null) {
      if (participant.childsCount == null) {
        return false;
      }
      if (
        participant.childsCount === 0 &&
        !filter.childsCount.includes(ChildsCount.None)
      ) {
        return false;
      }
      if (
        participant.childsCount === 1 &&
        !filter.childsCount.includes(ChildsCount.One)
      ) {
        return false;
      }
      if (
        participant.childsCount === 2 &&
        !filter.childsCount.includes(ChildsCount.Two)
      ) {
        return false;
      }
      if (
        participant.childsCount === 3 &&
        !filter.childsCount.includes(ChildsCount.Three)
      ) {
        return false;
      }
      if (
        participant.childsCount === 4 &&
        !filter.childsCount.includes(ChildsCount.Four)
      ) {
        return false;
      }
      if (
        participant.childsCount >= 5 &&
        !filter.childsCount.includes(ChildsCount.MoreFive)
      ) {
        return false;
      }
    }
    //work
    if (!Sagas.compareFilterProperty("work", participant, filter)) {
      return false;
    }
    //study
    if (!Sagas.compareFilterProperty("study", participant, filter)) {
      return false;
    }
    //salary
    if (filter.salary != null) {
      if (participant.salary == null) {
        return false;
      }
      if (participant.salary === 0 && !filter.salary.includes(Salary.None)) {
        return false;
      }
      if (
        participant.salary >= 0 &&
        participant.salary <= 10000 &&
        !filter.salary.includes(Salary.Before10)
      ) {
        return false;
      }
      if (
        participant.salary >= 10000 &&
        participant.salary <= 30000 &&
        !filter.salary.includes(Salary.Before30)
      ) {
        return false;
      }
      if (
        participant.salary >= 30000 &&
        participant.salary <= 70000 &&
        !filter.salary.includes(Salary.Before70)
      ) {
        return false;
      }
      if (
        participant.salary >= 70000 &&
        participant.salary <= 150000 &&
        !filter.salary.includes(Salary.Before150)
      ) {
        return false;
      }
      if (
        participant.salary >= 150000 &&
        !filter.salary.includes(Salary.More150)
      ) {
        return false;
      }
    }

    return true;
  },

  compareFilterProperty(
    propertyName: string,
    participant: User,
    filter: StatisticFilter
  ) {
    if ((filter as any)[propertyName] != null) {
      if ((participant as any)[propertyName] != (filter as any)[propertyName]) {
        return false;
      }
    }
    return true;
  },
};
