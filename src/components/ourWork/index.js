import React from "react";
import styled from "styled-components";

import { palette, device } from "../../variables";

import backstageWinnersImg from "./img/01.png";
import alphaBankImg from "./img/02.png";
import megaBonusImg from "./img/03.png";
import fortexImg from "./img/04.png";
import pilotImg from "./img/05.png";
import unexpectedNewsImg from "./img/07.png";
import giftImg from "./img/09.png";
import chernukhaImg from "./img/08.png";
import becameDadImg from "./img/06.png";
import getPhoneNumberImg from "./img/10.png";

const Wrapper = styled.div`
  background: ${palette.lightGray};
  padding: 30px 0;

  @media ${device.mobileL} {
    padding: 30px 20px;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.div`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const SubTitle = styled.div`
  display: inline-block;
  font-size: 20px;
  border-bottom: 1px solid ${palette.sRed};
  margin-bottom: 20px;
`;

const ItemTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 50px;
`;

const WorkItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const WorkItemWrapper = styled.div`
  flex-basis: 48%;

  @media ${device.mobileL} {
    flex-basis: 100%;
  }
`;

const WorkItem = styled.div`
  box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.35);
  width: 100%;
  height: 300px;
  display: block;
  margin-bottom: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  cursor: pointer;

  @media ${device.mobileL} {
    background-position: center;
  }
`;

const Fortex = styled(WorkItem)`
  background-image: url(${fortexImg});
`;

const MegaBonus = styled(WorkItem)`
  background-image: url(${megaBonusImg});
`;

const BackstageWinners = styled(WorkItem)`
  background-image: url(${backstageWinnersImg});
`;

const AlphaBank = styled(WorkItem)`
  background-image: url(${alphaBankImg});
`;

const Pilot = styled(WorkItem)`
  background-image: url(${pilotImg});
`;

const UnexpectedNews = styled(WorkItem)`
  background-image: url(${unexpectedNewsImg});
`;

const Gift = styled(WorkItem)`
  background-image: url(${giftImg});
`;

const Dirty = styled(WorkItem)`
  background-image: url(${chernukhaImg});
`;

const BecameDad = styled(WorkItem)`
  background-image: url(${becameDadImg});
`;

const GetPhoneNumber = styled(WorkItem)`
  background-image: url(${getPhoneNumberImg});
`;

const OurWork = () => (
  <Wrapper id="works-2">
    <Content>
      <Title>Наши работы</Title>
      <SubTitle>Рекламные ролики</SubTitle>
      <WorkItems>
      <WorkItemWrapper>
          <BackstageWinners
            data-fancybox
            href="https://youtu.be/HhhwXmmb7uU">
          </BackstageWinners>
          <ItemTitle>Бекстейдж съёмки роликов для победителей в конкурсе от Lay's</ItemTitle>
        </WorkItemWrapper>
        <WorkItemWrapper>
          <AlphaBank
            data-fancybox
            href="https://youtu.be/RqD6ZLBJAYI">
          </AlphaBank>
          <ItemTitle>Конкурс от "Альфа-банка"</ItemTitle>
        </WorkItemWrapper>
        <WorkItemWrapper>
          <Fortex
            thumbnail="https://loremflickr.com/320/240"
            data-fancybox
            href="https://youtu.be/Qr3yOKYdIEE"
          ></Fortex>
          <ItemTitle>Презентационный ролик "FORTEX - Водные технологии"</ItemTitle>
        </WorkItemWrapper>
        <WorkItemWrapper>
          <MegaBonus
            data-fancybox
            href="https://youtu.be/IffzVyWPDek"
          ></MegaBonus>
          <ItemTitle>Начинай покупки с Megabonus</ItemTitle>
        </WorkItemWrapper>
      </WorkItems>
      <SubTitle>Скетчи</SubTitle>
      <WorkItems>
        <WorkItemWrapper>
          <Pilot
            data-fancybox
            href="https://youtu.be/iY8O5X0fTXg"
          ></Pilot>
          <ItemTitle>Попутка</ItemTitle>
        </WorkItemWrapper>
        <WorkItemWrapper>
          <UnexpectedNews
            data-fancybox
            href="https://youtu.be/m-fe2Eu_OIM"
          ></UnexpectedNews>
          <ItemTitle>Неожиданная новость</ItemTitle>
        </WorkItemWrapper>
        <WorkItemWrapper>
          <BecameDad
            data-fancybox
            href="https://youtu.be/eC_83bDbJ5E"
          ></BecameDad>
          <ItemTitle>Когда стал отцом...</ItemTitle>
        </WorkItemWrapper>
        <WorkItemWrapper>
          <Dirty
            data-fancybox
            href="https://youtu.be/-siHQhqXQEo"
          ></Dirty>
          <ItemTitle>Чернуха</ItemTitle>
        </WorkItemWrapper>
        <WorkItemWrapper>
          <Gift
            data-fancybox
            href="https://youtu.be/5aobyuyypvA"
          ></Gift>
          <ItemTitle>Подарок на годовщину знакомства</ItemTitle>
        </WorkItemWrapper>
        <WorkItemWrapper>
          <GetPhoneNumber
            data-fancybox
            href="https://youtu.be/iuWEXZB3fkY"
          ></GetPhoneNumber>
          <ItemTitle>Как взять телефон у девушки</ItemTitle>
        </WorkItemWrapper>
      </WorkItems>
    </Content>
  </Wrapper>
);

export default OurWork;
