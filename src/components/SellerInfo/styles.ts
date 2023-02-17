import styled, { css } from 'styled-components';
import { Location } from '@styled-icons/evil/Location'
import { Messages } from '@styled-icons/typicons/Messages'
import { Clock } from '@styled-icons/fa-regular/Clock'

const iconCss = css`
    height: 1.875rem;
    width: 1.875rem;
    cursor: pointer;
`

export const Container = styled.div`
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;

    gap: 2rem;

    border-top: 1px solid var(--color-border);
`;

export const Title = styled.div`
    font-size: 1.125rem;
    font-weight: 600;
`

export const LocationCard = styled.div`
    display: flex;
    align-items: center;

    gap: .5rem;

    p {
        font-size: 1rem;
    }

    strong {
        font-size: .875rem;
        font-weight: normal;
        color: var(--color-gray);
    }
`

export const LocationIcon = styled(Location)`
    ${iconCss}
`

export const ReputationCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;
`

export const ReputationThermometer = styled.ol`
    list-style: none;
    width: 100%;
    display: grid;
    padding: 0 .25rem;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: .5rem;

    li {
        width: 100%;
        height: .5rem;
        
        &:nth-child(1){
            background: var(--reputation-1);
        }
        &:nth-child(2){
            background: var(--reputation-2);
        }
        &:nth-child(3){
            background: var(--reputation-3);
        }
        &:nth-child(4){
            background: var(--reputation-4);
        }
        &:nth-child(5){
            background: var(--reputation-5);
        }

        &.active {
            height: 1.25rem;
            cursor: pointer;
        }
    }
`

export const ReputationRow = styled.div`
    display: flex;
    align-items: flex-start;

    gap: 1rem;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 33%;

        strong {
            font-size: 1.25rem;
            height: 2rem;
            margin-bottom: .125rem;
        }

        span {
            font-size: .8rem;
        }

        position: relative;

        & + div {

            padding: 0 0 0 1rem;

            &::before {
                position: absolute;

                content: " ";

                top: 50%;
                left: 0;

                transform: translateY(-50%);

                height: 3rem;
                border-left: 1px solid var(--color-border);
            }
        }

    }
`

export const SupportIcon = styled(Messages)`
    ${iconCss}
`

export const ClockIcon = styled(Clock)`
    ${iconCss}
`

export const More = styled.a`
    color: var(--color-blue);
    font-size: .875rem;
    font-weight: 600;

    cursor: pointer;
`
