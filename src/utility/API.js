import { useDispatch } from "react-redux";
import { PageLoadingActionType } from "../redux/page-loading/page-loading";
import { errorHandler } from "../redux/page-loading/pageLoadingActions";

const fetch = async (fun, dispatch) => {
  dispatch({ type: PageLoadingActionType.Start });
  // new Promise(async function (resolve, reject) {
  //   setTimeout(async () => resolve(await fun()), 1200);
  //   // resolve(await fun());
  // })
  // .then(() => dispatch({ type: PageLoadingActionType.Done }))
  try {
    let response = await fun();
  } catch (exception) {
    dispatch(errorHandler(exception.message));
  } finally {
    dispatch({ type: PageLoadingActionType.Done });
  }
};

export default fetch;
