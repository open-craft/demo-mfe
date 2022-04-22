import {
  Alert, Card, Col, Container, Row,
} from '@edx/paragon';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Button from '@edx/paragon/dist/Button';
import { fetchCourses } from './data/thunks';
import selectCourses from './data/selectors';
import messages from './messages';

const buildLmsUrl = (absoluteUrl) => `${getConfig().LMS_BASE_URL}${absoluteUrl}`;
const buildCourseURL = (courseKey) => buildLmsUrl(`/courses/${courseKey}/about`);

export const CatalogPageBase = ({ intl }) => {
  // These 'use' functions are React hooks. Hooks let you hook into
  // parts of react like the state management system. You can read
  // more about them here: https://reactjs.org/docs/hooks-overview.html
  const dispatch = useDispatch();
  const { courses, errors, fetching } = useSelector(selectCourses);
  // By providing no dependencies in the second
  // argument, we signal that this hook should be run when the
  // component is mounted.
  useEffect(() => {
    dispatch(fetchCourses());
  }, []);
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1>{intl.formatMessage(messages.catalogHeading)}</h1>
        </Col>
        <Col xs={12}>
          {errors.map((error) => <Alert variant="danger" key={error}>{error}</Alert>)}
        </Col>
      </Row>
      {(fetching && (
        <Row>
          <Col className="text-center">{intl.formatMessage(messages.catalogLoading)}</Col>
        </Row>
      )) || (
        <Row>
          {
            // We can get insight into the structure of courses at this
            // endpoint by checking our local copy of it here:
            // http://localhost:18000/api/courses/v1/courses/
          }
          {courses.map((course) => (
            <Col xs={6} md={4} lg={3} key={course.id}>
              <Card>
                <Card.ImageCap
                  variant="top"
                  src={buildLmsUrl(course.media.course_image.uri)}
                  alt={intl.formatMessage(messages.catalogCourseBannerAlt, { courseName: course.name })}
                />
                <Card.Header>{course.name}</Card.Header>
                <Button variant="primary" href={buildCourseURL(course.id)}>{intl.formatMessage(messages.catalogCourseView)}</Button>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

CatalogPageBase.propTypes = {
  intl: intlShape.isRequired,
};

export const CatalogPage = injectIntl(CatalogPageBase);
