import { defineMessages } from '@edx/frontend-platform/i18n';

export default defineMessages({
  catalogHeading: {
    id: 'catalogHeading',
    defaultMessage: 'Course Catalog',
    description: 'The page heading for the catalog page.',
  },
  catalogLoading: {
    id: 'catalogLoading',
    defaultMessage: 'Loading...',
    description: 'Loading message when fetching the courses.',
  },
  catalogCourseView: {
    id: 'catalogView',
    defaultMessage: 'View Course',
    description: 'Label for the button that brings the user to the course about page.',
  },
  catalogCourseBannerAlt: {
    id: 'catalogCourseBannerAlt',
    defaultMessage: 'Showcase image for {courseName}',
    description: 'Alt text for course banner images.',
  },
});
