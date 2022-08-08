import styled from "styled-components";
export const SectionRegister = styled.section`
margin-top: 50px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
`
export const Container = styled.div`
        background-color:var(--lightGray) ;
        display: flex;
        flex-direction: column;
        width: 17rem;
        align-items: center;
        margin-bottom: 120px;
        gap: 15px;
        border-radius: 5px;
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        gap: 18px;
    }
    button{
        margin-top: 20px;
        background-color:var(--Pink) ;
        width: 15rem;
        height: 2rem;
        border: none;
        border-radius:5px ;
        margin-bottom: 30px;
    }
    h1{
        margin-top: 30px;
        font-size: 18px;
    }
    select{
        background: var(--grayInput);
        border: 1px solid var(--grey);
        width: 15rem;
        height: 2rem;
        border-radius:5px;
        padding-left: 10px;         
    }

    @media (min-width: 765px) {
        width:26rem;

        select{
            width: 20rem;
            height: 3rem;
            font-size: 17px;
        }
        button{
            width: 20rem;
            height: 3rem;
            font-size: 20px;
        }
        h1{
            font-size: 26px;
        }
    }
`
export const Div = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    flex-direction:column;
    gap: 13px;`
export const Span = styled.div`
    color: var(--grey);
    font-size: 11px;
    @media (min-width: 765px) {
        font-size: 17px;
    }
`
export const ConteinerTitulo = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 16rem;
    button{
    width: 79.54px;
    height: 31.95px;
    background: #212529;
    border-radius: 4px;
    border: none;
    }
    @media (min-width: 765px) {
        width: 26rem;
        img{
            width: 12rem;
        }
        button{
            width: 8rem;
            height: 2.5rem;
            font-size: 16px;
        }
    }
`