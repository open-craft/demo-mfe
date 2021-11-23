import * as api from './api';
import { catalogActions as actions } from './slice';

export const fetchCourses = () => async (dispatch) => {
  try {
    dispatch(actions.fetchCatalogRequest({}));
    const courses = await api.getCourses();
    dispatch(actions.fetchCatalogSuccess({ courses }));
  } catch (err) {
    dispatch(actions.fetchCatalogFailure({ errors: [String(err)] }));
  }
};

export default { fetchCourses };
