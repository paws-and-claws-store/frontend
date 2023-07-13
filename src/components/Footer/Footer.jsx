import {
  CatalogList,
  ContactsList,
  FooterAStyled,
  FooterH2Styled,
  FooterLinkStyled,
  FooterStyled,
  SocialLinkStyled,
  SocialListStyled,
  UsersList,
} from './Footer.styled';
import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
} from 'components/Icons/SocialIcons';

export const Footer = () => {
  return (
    <FooterStyled>
      <div>
        <FooterH2Styled>Каталог</FooterH2Styled>
        <CatalogList>
          <li>
            <FooterLinkStyled to="/">Корм для собак</FooterLinkStyled>
          </li>
          <li>
            <FooterLinkStyled to="/">Корм для котів</FooterLinkStyled>
          </li>
          <li>
            <FooterLinkStyled to="/">Бренди</FooterLinkStyled>
          </li>
        </CatalogList>
      </div>
      <div>
        <FooterH2Styled>Покупцям</FooterH2Styled>

        <UsersList>
          <li>
            <FooterLinkStyled to="/">Доставка</FooterLinkStyled>
          </li>
          <li>
            <FooterLinkStyled to="/">Повернення й обмін</FooterLinkStyled>
          </li>
          <li>
            <FooterLinkStyled to="/">Про компанію</FooterLinkStyled>
          </li>
          <li>
            <FooterLinkStyled to="/">Договір публічної оферти</FooterLinkStyled>
          </li>
          <li>
            <FooterLinkStyled to="/">
              Політика конфіденційності
            </FooterLinkStyled>
          </li>
        </UsersList>
      </div>
      <div>
        <FooterH2Styled>Контакти</FooterH2Styled>
        <ContactsList>
          <li>
            <FooterAStyled href="tel:+380000000">+380486752312</FooterAStyled>
          </li>
          <li>
            <FooterAStyled href="mailto:dadfdsfsds@gmail.com">
              clawspaws@gmail.com
            </FooterAStyled>
          </li>
          <SocialListStyled>
            <li>
              <SocialLinkStyled href="http://instagram.com">
                <InstagramIcon />
              </SocialLinkStyled>
            </li>
            <li>
              <SocialLinkStyled href="http://instagram.com">
                <FacebookIcon />
              </SocialLinkStyled>
            </li>
            <li>
              <SocialLinkStyled href="http://instagram.com">
                <TelegramIcon />
              </SocialLinkStyled>
            </li>
          </SocialListStyled>
        </ContactsList>
      </div>
    </FooterStyled>
  );
};
