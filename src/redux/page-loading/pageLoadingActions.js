import { PageLoadingActionType } from "./page-loading";

export const errorHandler = (data = "Something went wrong") => {
  return { type: PageLoadingActionType.ErrorMessage, payload: data };
};
