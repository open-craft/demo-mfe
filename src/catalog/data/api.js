import { ensureConfig, getConfig } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';

ensureConfig(['LMS_BASE_URL'], 'course API service');

export const getCourses = async () => {
  const client = getAuthenticatedHttpClient();
  const baseUrl = getConfig().LMS_BASE_URL;
  const response = await client.get(`${baseUrl}/api/courses/v1/courses/`);
  // This data is actually paginated. The results object contains
  // the first page. For simplicity's sake, we're going to ignore
  // pagination and just use the first page.
  return response.data.results;
};

export default { getCourses };
