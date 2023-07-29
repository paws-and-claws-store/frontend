import { useLocation } from 'react-router-dom';
import {
  BreadcrumbsContainerStyled,
  BreadcrumbsDivStyled,
  BreadcrumbsLinkStyled,
  BreadcrumbsMainPageLinkStyled,
  BreadcrumbsiconStyled,
} from './BreadCrumbs.styled';
import { Vector } from 'components/Icons/Vector';
import { nanoid } from 'nanoid';

export default function Breadcrumbs() {
  const location = useLocation();
  let currentLink = '';
  const crumbsFilter = location.pathname.split('/').filter(crumb => crumb !== '');

  const pathNameLocalization = [
    { pathNameEn: 'catalog', pathNameUa: 'Каталог' },
    { pathNameEn: 'prices-drop', pathNameUa: 'Акції' },
    { pathNameEn: 'brands', pathNameUa: 'Бренди' },
    { pathNameEn: 'aboutUs', pathNameUa: 'Про компанію' },
    { pathNameEn: 'contacts', pathNameUa: 'Контакти' },
  ];

  const crumbs = crumbsFilter.map(crumb => {
    currentLink += `/${crumb}`;

    const localNameCrumb = pathNameLocalization.find(name => name.pathNameEn === crumb);

    const renderToPage = localNameCrumb ? localNameCrumb.pathNameUa : crumb;

    return (
      <BreadcrumbsDivStyled key={nanoid()}>
        <BreadcrumbsiconStyled>
          <Vector key={nanoid()} />
        </BreadcrumbsiconStyled>
        <BreadcrumbsLinkStyled to={currentLink} key={crumb}>
          {renderToPage}
        </BreadcrumbsLinkStyled>
      </BreadcrumbsDivStyled>
    );
  });

  if (location.pathname !== '/') {
    return (
      <BreadcrumbsContainerStyled>
        <BreadcrumbsMainPageLinkStyled to={'/'} key={'main'}>
          {'Головна'}
        </BreadcrumbsMainPageLinkStyled>
        {crumbs}
      </BreadcrumbsContainerStyled>
    );
  } else {
    return null;
  }
}
