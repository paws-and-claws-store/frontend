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
import { useStateContext } from 'context/StateContext';
import { fetchAllPets, fetchAllStructure } from 'services/api';

export default function Breadcrumbs() {
  let languageSite = 'ua';
  const location = useLocation();
  let currentLink = '';
  const crumbsFilter = location.pathname.split('/').filter(crumb => crumb !== '');

  const pathNameLocalization = [
    { code: 'catalog', ua: 'Каталог', en: 'Catalog' },
    { code: 'prices-drop', ua: 'Акції', en: 'Promotion' },
    { code: 'brands', ua: 'Бренди', en: 'Brands' },
    { code: 'aboutUs', ua: 'Про компанію', en: 'About Us' },
    { code: 'contacts', ua: 'Контакти', en: 'Contacts' },
  ];
  const { stateBreadcrumb } = useStateContext();

  const crumbs = crumbsFilter.map(crumb => {
    currentLink += `/${crumb}`;

    const localNameCrumb = pathNameLocalization.find(name => name.code === crumb);
    let renderToPage;
    const stateBreadCrumbNameCrumb = stateBreadcrumb.find(name => name._id === crumb);
    // console.log('stateBreadCrumbNameCrumb :>> ', stateBreadCrumbNameCrumb);
    // console.log('stateBreadcrumb :>> ', stateBreadcrumb);

    if (stateBreadCrumbNameCrumb === undefined) {
      return null;
    }

    if (stateBreadCrumbNameCrumb && stateBreadCrumbNameCrumb[languageSite]) {
      renderToPage = localNameCrumb
        ? localNameCrumb[languageSite]
        : stateBreadCrumbNameCrumb[languageSite];
    } else if (stateBreadCrumbNameCrumb?._id === crumb) {
      renderToPage = stateBreadCrumbNameCrumb['productName'];
    } else {
      renderToPage = localNameCrumb ? localNameCrumb[languageSite] : crumb;
    }

    // const renderToPage = localNameCrumb ? localNameCrumb.pathNameUa : crumb;

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
          {/* {'Головна'} */}

          {languageSite === 'ua' ? 'Головна' : 'Main'}
        </BreadcrumbsMainPageLinkStyled>
        {crumbs}
      </BreadcrumbsContainerStyled>
    );
  } else {
    return null;
  }
}
