import {
  Alert, Card, Col, Container, Row,
} from '@edx/paragon';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';
import { useEffect } from 'react';
import Button from '@edx/paragon/dist/Button';
import { useList } from '@opencraft/providence/react-plugin';
import messages from './messages';

const buildLmsUrl = (absoluteUrl) => `${getConfig().LMS_BASE_URL}${absoluteUrl}`;
const buildCourseURL = (courseKey) => buildLmsUrl(`/courses/${courseKey}/about`);

export const CatalogPageBase = ({ intl }) => {
  // These 'use' functions are React hooks. Hooks let you hook into
  // parts of react like the state management system. You can read
  // more about them here: https://reactjs.org/docs/hooks-overview.html
  const courses = useList('courses', { endpoint: buildLmsUrl('/api/courses/v1/courses/') });
  // By providing no dependencies in the second
  // argument, we signal that this hook should be run when the
  // component is mounted.
  useEffect(() => {
    courses.getOnce();
  }, []);
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1>{intl.formatMessage(messages.catalogHeading)}</h1>
        </Col>
        <Col xs={12}>
          {courses.errors.messages.map((error) => <Alert variant="danger" key={error}>{error}</Alert>)}
        </Col>
      </Row>
      <Row>
        {(courses.fetching && (
          <Col className="text-center">{intl.formatMessage(messages.catalogLoading)}</Col>
        ))}
        {courses.ready && courses.list.map((course) => (
          <Col xs={6} md={4} lg={3} key={course.x.id}>
            <Card>
              <Card.ImageCap
                variant="top"
                src={buildLmsUrl(course.x.media.course_image.uri)}
                alt={intl.formatMessage(messages.catalogCourseBannerAlt, { courseName: course.x.name })}
              />
              <Card.Header>{course.x.name}</Card.Header>
              <Button variant="primary" href={buildCourseURL(course.x.id)}>{intl.formatMessage(messages.catalogCourseView)}</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

CatalogPageBase.propTypes = {
  intl: intlShape.isRequired,
};

export const CatalogPage = injectIntl(CatalogPageBase);
