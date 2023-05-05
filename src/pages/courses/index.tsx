import { useTranslation } from "react-i18next";
import { withLayout } from "src/layouts/layout";
import Seo from "src/layouts/seo/seo";
import { CoursesPageComponent } from "src/page-component";

const Courses = () => {
  const { t } = useTranslation();
  return (
    <Seo
      metaTitle={`Shunqor | ${t('course_page_title', { ns: 'seo' })}` || 'Shunqor | All Courses'}
      metaDescription={
        `Shunqor | ${t('course_page_description', { ns: 'seo' })}` ||
        'All courses in shunqor platform just learn and relax'
      }
    >
      <CoursesPageComponent />
    </Seo>
  );
};

export default withLayout(Courses);