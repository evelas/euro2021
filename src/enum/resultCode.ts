export enum resultCodeEnum {
  // main
  Success = 0,
  EmailOrPasswordIsWrong = 1,
  AccountIsNotActivated = 2,
  EmailIsExists = 3,
  EmailNotFound = 4,
  ToMuchAttempt = 10,

  // quiz
  QuizAnswerIsWrong = 30,
  QuizAnswerIsRight = 31,

  // admin
  UserNotFound = 6,
}
