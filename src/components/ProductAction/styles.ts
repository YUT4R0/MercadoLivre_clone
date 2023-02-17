import styled from 'styled-components';
import { Heart } from '@styled-icons/bootstrap/Heart'
import { Truck } from '@styled-icons/bootstrap/Truck'
import { ShieldCheck } from '@styled-icons/bootstrap/ShieldCheck'
import { ReturnDownBack } from '@styled-icons/ionicons-outline/ReturnDownBack'
import { Medal } from '@styled-icons/boxicons-regular/Medal'
import { Trophy } from '@styled-icons/bootstrap/Trophy'
import { CreditCard } from '@styled-icons/bootstrap/CreditCard'
import { Location } from '@styled-icons/evil/Location'
import { Barcode } from '@styled-icons/remix-line/Barcode'
import { Visa } from '@styled-icons/simple-icons/Visa'
import { CcMastercard } from '@styled-icons/fa-brands/CcMastercard'
import { BoltLightning } from '@styled-icons/fa-solid/BoltLightning'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
`;

export const Condition = styled.div`
    display: flex;
    font-size: .875rem;
    gap: .5rem;
    color: var(--color-gray);

    p {
    & + p {
        padding-left: .5rem;
        border-left: 2px solid var(--color-border);
    }
    }

    margin-bottom: 1rem;
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    h1 {
        width: 100%;
        font-size: 1.625rem;
        font-weight: 600;
    }
`

export const HeartIcon = styled(Heart)`
    width: 1.75rem;
    height: 1.75rem;
    fill: var(--color-blue);
    cursor: pointer;
    flex-shrink: 0;
`

export const DispatchTag = styled.div`
    margin-top: .75rem;
    background: var(--color-blue);
    color: var(--color-white);
    padding: .375rem .625rem;
    border-radius: .25rem;
    font-size: .875rem;
    font-weight: 600;
    width: fit-content;
`

export const PriceCard = styled.div`
    margin-top: 1.125rem;
    display: flex;
    flex-direction: column;
`

export const PriceRow = styled.div`
    display: flex;
    align-items: flex-start;
    font-size: 2.75rem;

    .fraction {
        margin-left: 0.55rem;
    }

    .cents {
        font-size: 1.25rem;
        padding-top: .125rem;
        margin-left: .125rem;
    }
`

export const OldPrice = styled.div`
    color: var(--color-gray);
    text-decoration: line-through;
`

export const InstallmentCard = styled.div`
    margin-top: 1.5rem;
    display: flex;

    gap: .5rem;
    
    div {
        display: flex;
        flex-direction: column;

        gap: .25rem;

        .title {
            color: var(--color-green);
            display: flex;
            flex-direction: row;
            align-items: center;
            
            gap: .25rem;

            .installvalues {
                display: flex;
                flex-direction: row;

                .cents {
                    font-size: .625rem;
                    margin-left: -.15rem;
                    font-weight: bold;
                }
            }
        }

        .payments {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: .5rem;
        }

        .more {
            color: var(--color-blue);
            text-decoration: none;
            font-size: .875rem;
        }
    }



`

export const CardIcon = styled(CreditCard)`    
    width: 1.5rem;
    height: 1.5rem;
    fill: var(--color-green);
    cursor: pointer;
    flex-shrink: 0;
`

export const VisaIcon = styled(Visa)`
    width: 1.5rem;
    height: 1.5rem;
    fill: var(--color-gray);
    cursor: pointer;
    flex-shrink: 0;
`
export const MastercardIcon = styled(CcMastercard)`
    width: 1.5rem;
    height: 1.5rem;
    fill: var(--color-gray);
    cursor: pointer;
    flex-shrink: 0;
`
export const BarcodeIcon = styled(Barcode)`
    width: 1.5rem;
    height: 1.5rem;
    fill: var(--color-gray);
    cursor: pointer;
    flex-shrink: 0;
`

export const StockStatus = styled.div`
    margin-top: .875rem;
    font-size: 1.125rem;
`

export const MethodCard = styled.div`
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    display: flex;

    gap: .5rem;
    
    div {
        display: flex;
        flex-direction: column;
        margin-top: .15rem;
        gap: .25rem;

        .title {
            color: var(--color-green);
            display: flex;
            flex-direction: row;
            gap: .25rem;
            align-items: center;

            .portagestatus {
                text-transform: uppercase;
                font-style: italic;
                font-weight: bolder;
            }
        }
        .details {
            color: var(--color-gray);
            font-size: .875rem;
        }
        .location {
            display: flex;
            gap: .25rem;
            align-items: center;
            color: var(--color-blue);
            text-decoration: none;
            font-size: .875rem;
            margin-left: -.3rem;
        }
    }
`

export const TruckIcon = styled(Truck)`
    width: 1.5rem;
    height: 1.5rem;
    fill: var(--color-green);
    cursor: pointer;
    flex-shrink: 0;
`

export const ZapIcon = styled(BoltLightning)`
    width: 1rem;
    height: 1rem;
    fill: var(--color-green);
    cursor: pointer;
    flex-shrink: 0;
`

export const LocationIcon = styled(Location)`
    width: 1.5rem;
    height: 1.5rem;
    fill: var(--color-blue);
    cursor: pointer;
    flex-shrink: 0;
`

export const Actions = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: .625rem;
`

interface ButtonProps {
    solid ? : boolean
}

export const Button = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    border-radius: .25rem;
    padding: .75rem .625rem;

    cursor: pointer;

    background: ${props => props.solid ? 'var(--color-blue)' : 'transparent'};
    color: ${props => props.solid ? 'var(--color-white)' : 'var(--color-blue)'};
    border: ${props => props.solid ? 'none' : '1px solid var(--color-blue)'};

    transition: all .1s ease-in-out;

    &:hover {
        filter: brightness(.75);
    }
`

export const Benefits = styled.ul`
    margin-top: 1rem;
    list-style: none;

    gap: 1rem;

    display: flex;
    flex-direction: column;

    li {
        display: flex;
        align-items: center;
        gap: .625rem;

        &:not(:first-child){
            border-top: 1px solid var(--color-border);
            padding-top: 1rem;
        }

        p {
            color: var(--color-gray);

            span {
                color: var(--color-blue);
                cursor: pointer;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
        

        font-size: .875rem;
    }
`

export const ShieldIcon = styled(ShieldCheck)`
    width: 1.25rem;
    height: 1.25rem;
    fill: var(--color-gray);
    cursor: pointer;
    flex-shrink: 0;
`

export const ReturnIcon = styled(ReturnDownBack)`
    width: 1.25rem;
    height: 1.25rem;
    fill: var(--color-gray);
    cursor: pointer;
    flex-shrink: 0;
`

export const TrophyIcon = styled(Medal)`
    width: 1.25rem;
    height: 1.25rem;
    fill: var(--color-gray);
    cursor: pointer;
    flex-shrink: 0;
`

export const MedalIcon = styled(Trophy)`
    width: 1.25rem;
    height: 1.25rem;
    fill: var(--color-gray);
    cursor: pointer;
    flex-shrink: 0;
`


