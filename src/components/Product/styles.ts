import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Row = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem 0;

    gap: .625rem;

    a {
      font-size: .875rem;
      text-decoration: none;
      color: var(--color-blue);

      & + a {
        padding-left: .625rem;
        border-left: 2px solid var(--color-border);
      }

    }
`

export const Panel = styled.div`
    background-color: var(--color-white);
    box-shadow: var(--panel-shadow);

    display: grid;

    grid-template-columns: 65fr 35fr;
`

export const Column = styled.div`
    &:first-child {
        border-right: 1px solid var(--color-border);
    }
`

export const Gallery = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 33.125rem;

    img {
        height: 70%;
    }

`

export const Description = styled.div`
    display: flex;
    flex-direction: column;

    border-top: 1px solid var(--color-border);

    gap: 2rem;

    padding: 2.75rem 2rem;

    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    p {
        font-size: 1.25rem;
        color: var(--color-gray);
        line-height: 1.75rem;

        li {
         list-style: none;
        }
    }
`

export const Section = styled.div`
    display: flex;
    flex-direction: column;

    gap: 2rem;

    border-top: 1px solid var(--color-border);
    padding: 3rem 2rem;

    h4 {
        font-size: 1.125rem;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        
        span {
            display: flex;
            flex-direction: column;
            gap: .375rem;
        }

        .title {
            font-size: 1rem;
            color: var(--color-black);
        }

        .description {
            font-size: .875rem;
            color: var(--color-gray);
            line-height: 1.25rem;
        }
    }

    a {
        font-size: .875rem;
        font-weight: 600;
        text-decoration: none;
        color: var(--color-blue);
    }
`


