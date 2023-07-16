import {
  CatalogList,
  ContactsList,
  FooterAStyled,
  FooterContainer,
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
      <FooterContainer>
        <div>
          <FooterH2Styled>Каталог</FooterH2Styled>
          <CatalogList>
            <li>
              <FooterLinkStyled to="/pageUnderConstruction">
                Корм для собак
              </FooterLinkStyled>
            </li>
            <li>
              <FooterLinkStyled to="/pageUnderConstruction">
                Корм для котів
              </FooterLinkStyled>
            </li>
            <li>
              <FooterLinkStyled to="/brands">Бренди</FooterLinkStyled>
            </li>
          </CatalogList>
        </div>
        <div>
          <FooterH2Styled>Покупцям</FooterH2Styled>

          <UsersList>
            <li>
              <FooterLinkStyled to="/pageUnderConstruction">
                Доставка
              </FooterLinkStyled>
            </li>
            <li>
              <FooterLinkStyled to="/pageUnderConstruction">
                Повернення й обмін
              </FooterLinkStyled>
            </li>
            <li>
              <FooterLinkStyled to="/pageUnderConstruction">
                Про компанію
              </FooterLinkStyled>
            </li>
            <li>
              <FooterLinkStyled to="/pageUnderConstruction">
                Договір публічної оферти
              </FooterLinkStyled>
            </li>
            <li>
              <FooterLinkStyled to="/pageUnderConstruction">
                Політика конфіденційності
              </FooterLinkStyled>
            </li>
          </UsersList>
        </div>
        <div>
          <FooterH2Styled>Контакти</FooterH2Styled>
          <ContactsList id="contacts">
            <li>
              <FooterAStyled href="tel:+380486752312">
                +380486752312
              </FooterAStyled>
            </li>
            <li>
              <FooterAStyled href="mailto:clawspaws@gmail.com" target="_blank">
                clawspaws@gmail.com
              </FooterAStyled>
            </li>
            <SocialListStyled>
              <li>
                <SocialLinkStyled href="http://instagram.com" target="_blank">
                  <InstagramIcon />
                </SocialLinkStyled>
              </li>
              <li>
                <SocialLinkStyled href="http://facebook.com" target="_blank">
                  <FacebookIcon />
                </SocialLinkStyled>
              </li>
              <li>
                <SocialLinkStyled href="http://t.me" target="_blank">
                  <TelegramIcon />
                </SocialLinkStyled>
              </li>
            </SocialListStyled>
          </ContactsList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};
