import React from 'react';

import {
    Container,
    Condition,
    Row,
    HeartIcon,
    PriceCard,
    PriceRow,
    DispatchTag,
    OldPrice,
    InstallmentCard,
    StockStatus,
    MethodCard,
    CardIcon,
    VisaIcon,
    MastercardIcon,
    BarcodeIcon,
    LocationIcon,
    TruckIcon,
    ZapIcon,
    Actions,
    Button,
    Benefits,
    ReturnIcon,
    ShieldIcon,
    TrophyIcon,
    MedalIcon,
} from './styles';

const ProductAction: React.FC = () => {
  return (
    <Container>
        <Condition>
            <p>Novo</p>
            <p>9 vendidos</p>
        </Condition>

        <Row>
            <h1>Camisinha Branca de Porra da vagabunda Dalva</h1>
            <HeartIcon />
        </Row>

        <DispatchTag>
            Enviando normalmente
        </DispatchTag>

        <PriceCard>
            <PriceRow>
                <span className="symbol">R$</span>
                <span className="fraction">999</span>
                <span className="cents">99</span>
            </PriceRow>
        </PriceCard>

        <OldPrice>
            <span className="fraction">100</span>
            <span className="cents">00</span>
        </OldPrice>

        <InstallmentCard>
            <CardIcon />

            <div>
                <span className="title">
                    3x de
                    <div className="installvalues">
                        <span>24</span>
                        <span className='cents'>99</span>
                    </div>
                    sem juros
                </span>

                <div className="payments">
                    <VisaIcon />
                    <MastercardIcon />
                    <BarcodeIcon />
                </div>

                <a href="#5" className="more">
                    Ver mais opções
                </a>
            </div>
        </InstallmentCard>

        <MethodCard>
            <TruckIcon />

            <div>
                <span className="title">
                    <span>Frete grátis</span>
                    <ZapIcon />
                    <span className="portagestatus">full</span>
                </span>
                <span className="details">Saiba os prazos de entrega e as formas de envio do produto.</span>
                <a href="#5" className="location">
                    <LocationIcon />
                    <p>
                        Calcular o prazo de entrega
                    </p>
                </a>
            </div>
        </MethodCard>

        <StockStatus>
            Estoque disponível
        </StockStatus>

        <Actions>
            <Button solid>Comprar agora</Button>
            <Button>adicionar ao carrinho</Button>
        </Actions>

        <Benefits>
            <li>
                <ReturnIcon />
                <p>
                    <span>Devolução grátis</span>
                    , você tem 30 dias pra cometer dois suicídios.
                </p>
            </li>
            <li>
                <ShieldIcon />
                <p>
                    <span>Compra garantida</span>
                    , receba essa porra desse caralho desse filho da puta xddd.
                </p>
            </li>
            <li>
                <TrophyIcon />
                <p>
                    <span>Mercado Points! </span>
                    você acumula 69 pontos.
                </p>
            </li>
            <li>
                <MedalIcon />
                <p>
                    <span>12 meses </span>
                    de garantia de fábrica.
                </p>
            </li>
        </Benefits>

    </Container>
  );
}

export default ProductAction;
