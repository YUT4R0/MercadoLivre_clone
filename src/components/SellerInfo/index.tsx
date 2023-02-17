import React from 'react';

import {
    Container,
    Title,
    LocationCard,
    LocationIcon,
    ReputationCard,
    ReputationThermometer,
    ReputationRow,
    SupportIcon,
    ClockIcon,
    More,
} from './styles';

const SellerInfo: React.FC = () => {
  return (
    <Container>
        <Title>Informações sobre o vendedor</Title>
        
        <LocationCard>
            <LocationIcon />

            <div>
                <p>Localização</p>
                <strong>Mina Gerais, Salto do Itararé</strong>
            </div>
        </LocationCard>

        <ReputationCard>
            <ReputationThermometer>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className='active'></li>
            </ReputationThermometer>

            <ReputationRow>
                <div>
                    <strong>666</strong>
                    <span>vendas nos ultimos 4 meses</span>
                </div>
                <div>
                    <strong><SupportIcon /></strong>
                    <span>atendimento de 2 litros de jimo</span>
                </div>
                <div>
                    <strong> <ClockIcon /> </strong>
                    <span>vendas nos ultimos 4 meses</span>
                </div>
            </ReputationRow>
        </ReputationCard>

        <More>
            Ver mais informações do vendedor
        </More>

    </Container>
  );
}

export default SellerInfo;
