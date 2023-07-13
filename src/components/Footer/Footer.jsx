import { Link } from 'react-router-dom';
import {
  FooterAStyled,
  FooterH2Styled,
  FooterLinkStyled,
  FooterStyled,
  SocialLinkStyled,
  SocialListStyled,
} from './Footer.styled';
import { FacebookIcon, InstagramIcon, TelegramIcon } from 'components/Icons/SocialIcons';

export const Footer = () => {
  return (
    <FooterStyled>
      <div>
        <FooterH2Styled>Каталог</FooterH2Styled>
        <ul>
          <li>
            <FooterLinkStyled to="/">Корм для собак</FooterLinkStyled>
          </li>
          <li>
            <FooterLinkStyled to="/">Корм для котів</FooterLinkStyled>
          </li>
          <li>
            <FooterLinkStyled to="/">Бренди</FooterLinkStyled>
          </li>
        </ul>
      </div>
      <div>
        <FooterH2Styled>Покупцям</FooterH2Styled>

        <ul>
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
            <FooterLinkStyled to="/">Політика конфіденційності</FooterLinkStyled>
          </li>
        </ul>
      </div>
      <div>
        <FooterH2Styled>Контакти</FooterH2Styled>
        <ul>
          <li>
            <FooterAStyled href="tel:+380000000">+380000000</FooterAStyled>
          </li>
          <li>
            <FooterAStyled href="mailto:dadfdsfsds@gmail.com">dadfdsfsds@gmail.com</FooterAStyled>
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
        </ul>
      </div>
    </FooterStyled>
  );
};
