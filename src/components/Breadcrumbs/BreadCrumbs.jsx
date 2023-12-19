import { useLocation } from 'react-router-dom';
import {
  BreadcrumbsContainerStyled,
  BreadcrumbsDivStyled,
  BreadcrumbsLinkStyled,
  BreadcrumbsMainPageLinkStyled,
  BreadcrumbsNoLinkStyled,
  BreadcrumbsiconStyled,
} from './BreadCrumbs.styled';
import { Vector } from 'components/Icons/Vector';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { selectBreadCrumbsStore } from 'redux/selectors/selectors';

export default function Breadcrumbs() {
  let languageSite = 'ua';
  const location = useLocation();
  let currentLink = '';
  const crumbsFilter = location.pathname
    .split('/')
    .filter(crumb => crumb !== '');

  const stateBreadcrumb = useSelector(selectBreadCrumbsStore);

  const crumbs = crumbsFilter.map((crumb, index, array) => {
    currentLink += `/${crumb}`;

    const stateBreadCrumbNameCrumb = stateBreadcrumb.find(
      name => name._id === crumb,
    );

    const renderToPage = stateBreadCrumbNameCrumb
      ? stateBreadCrumbNameCrumb[languageSite] ||
        stateBreadCrumbNameCrumb['productName']
      : null;

    return (
      <BreadcrumbsDivStyled key={nanoid()}>
        <BreadcrumbsiconStyled>
          <Vector key={nanoid()} />
        </BreadcrumbsiconStyled>
        {index !== array.length - 1 ? (
          <BreadcrumbsLinkStyled to={currentLink} key={crumb}>
            {renderToPage}
          </BreadcrumbsLinkStyled>
        ) : (
          <BreadcrumbsNoLinkStyled key={crumb}>
            {renderToPage}
          </BreadcrumbsNoLinkStyled>
        )}
      </BreadcrumbsDivStyled>
    );
  });

  if (location.pathname !== '/') {
    return (
      <BreadcrumbsContainerStyled>
        <BreadcrumbsMainPageLinkStyled to={'/'} key={'main'}>
          {languageSite === 'ua' ? 'Головна' : 'Main'}
        </BreadcrumbsMainPageLinkStyled>
        {crumbs}
      </BreadcrumbsContainerStyled>
    );
  } else {
    return null;
  }
}
