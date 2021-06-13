import { updateObject } from "../../utility/updateObject";

export const initialPageLoadingState = {
  loadingCounter: 0,
  messages: {
    successMessage: { type: "success", messages: [] },
    errorMessage: { type: "error", messages: [] },
  },
};

export const PageLoadingActionType = {
  Start: "Start",
  Done: "Done",
  SuccessMessage: "SuccessMessage",
  RemoveSuccessMessage: "RemoveSuccessMessage",
  ErrorMessage: "ErrorMessage",
  RemoveErrorMessage: "RemoveErrorMessage",
};

const maximumLoadingCount = 20;
export const pageLoadingReducer = (state = initialPageLoadingState, action) => {
  let updatedItems = null;
  switch (action.type) {
    case PageLoadingActionType.Start:
      if (state.loadingCounter > maximumLoadingCount) {
        state.loadingCounter = 0;
      }
      return updateObject(state, { loadingCounter: state.loadingCounter + 1 });
    case PageLoadingActionType.Done:
      if (state.loadingCounter < 0) {
        state.loadingCounter = 0;
      }
      if (state.loadingCounter >= 1) {
        return updateObject(state, {
          loadingCounter: state.loadingCounter - 1,
        });
      }
      return state;
    case PageLoadingActionType.ErrorMessage:
      return {
        ...state,
        messages: {
          ...state.messages,
          errorMessage: {
            ...state.messages.errorMessage,
            messages: [...state.messages.errorMessage.messages, action.payload],
          },
        },
      };
    case PageLoadingActionType.RemoveErrorMessage:
      updatedItems = [...state.messages.errorMessage.messages];
      updatedItems.shift();
      return {
        ...state,
        messages: {
          ...state.messages,
          errorMessage: {
            ...state.messages.errorMessage,
            messages: updatedItems,
          },
        },
      };
    case PageLoadingActionType.SuccessMessage:
      return {
        ...state,
        messages: {
          ...state.messages,
          successMessage: {
            ...state.messages.successMessage,
            messages: [
              ...state.messages.successMessage.messages,
              action.payload,
            ],
          },
        },
      };
    case PageLoadingActionType.RemoveSuccessMessage:
      updatedItems = [...state.messages.successMessage.messages];
      updatedItems.shift();
      return {
        ...state,
        messages: {
          ...state.messages,
          successMessage: {
            ...state.messages.successMessage,
            messages: updatedItems,
          },
        },
      };
    default:
      return state;
  }
};
