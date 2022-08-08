import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 9.772px;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    div{
        margin-bottom: 10px;
    }
    span{
        margin-top: 3px;
        text-align: center;
        font-size: 11px;
        width: 15rem;
    
    }
    @media (min-width: 765px) {
        font-size: 16px;
        span{
            font-size: 17px;
            width: 20rem;
        }
    }
`
export const InputConteiner = styled.input`
    background: var(--grayInput);
    border: 1px solid var(--grey);
    width: 15rem;
    height: 2rem;
    border-radius:5px;
    padding-left: 10px;
    @media (min-width: 765px) {
        width:20rem;
        height: 3rem;
        font-size: 18px;
    }
`
