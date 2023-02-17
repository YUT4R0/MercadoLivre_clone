import React from 'react';
import { Container, Row, Panel, Column, Gallery, Description, Section, } from './styles';
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

const tshirtImg = require('../../assets/tshirt.png');

const Product: React.FC = () => {
  return (
    <Container>
        <Row>
            <a href="#1">Compartilhar</a>
            <a href="#2">Vender igual</a>
        </Row>

        <Panel>
            <Column>
                <Gallery>
                    <img src={tshirtImg} alt="T-shirt" />
                </Gallery>

                <Info />
            </Column>

            <Column>
                <ProductAction />

                <SellerInfo />

                <Warranty />
                <Warranty />
                <Warranty />
            </Column>
        </Panel>

    </Container>
  );
}

const Info: React.FC = () => {
    return (
        <Description>
            <h2>Descrição</h2>

            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium pariatur asperiores molestiae. Quibusdam, debitis illo? Deleniti quidem ad natus dicta, accusamus pariatur reiciendis obcaecati asperiores molestias impedit dolor! Dolore, aperiam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, neque nisi, doloremque aliquam tempore vero at culpa ut quas, porro modi tempora? Natus temporibus repudiandae nihil mollitia earum expedita debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellendus! Necessitatibus, adipisci officia officiis praesentium aliquam labore quaerat quas laudantium, tempora quos beatae vel soluta ullam, ad expedita velit sequi.</p>
                <p> 
                   <ul>
                    <li> - Lorem ipsum dolor sit amet consectetur, adipisicing</li>
                    <li> - Lorem ipsum dolor sit amet consectetur, adipisicing</li>
                    <li> - Lorem ipsum dolor sit amet consectetur, adipisicing</li>
                    <li> - Lorem ipsum dolor sit amet consectetur, adipisicing</li>
                   </ul>  
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, debitis animi error quas at odio rem voluptas! Explicabo fuga non dolore, unde nemo necessitatibus tenetur temporibus quos odio. Nostrum, quia?</p>
            </div>
        </Description>
    )
}

const Warranty: React.FC = () => {
    return (
        <Section>
            <h4>Garantia</h4>
            
            <div>
                <span>
                    <p className="title">Compra garantida com Walter White</p>
                    <p className="description">Sem devolução, não somos legais e vamos matar seu cachorro, alem do mais, o capitalismo falhou, falha, e falhará em cada sociedade onde seus tentaculos de exploração do trabalhador tocar</p>
                </span>
                <span>
                    <p className="title">Garantida do tucanista</p>
                    <p className="description">eu vou me matar</p>
                </span>
            </div>

            <a href="#3">Saiba mais sobre essa merda</a>
        </Section>
    )
}



export default Product;
