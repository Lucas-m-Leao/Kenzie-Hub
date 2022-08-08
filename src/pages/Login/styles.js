import styled from "styled-components";

export const Section = styled.section`
        margin-top: 50px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    img{
        width: 8rem;
    }
    span{
        font-size: 10px;
        color: var(--grey2);
    }
    button{
        background-color:var(--grey2) ;
        width: 15rem;
        height: 2rem;
        border: none;
        border-radius:5px ;
        margin-bottom: 50px;
        font-size: 20px;
    }
    @media (min-width: 765px) {
        button{
        width: 20rem;
        height: 2.8rem;
        }
        span{
            font-size: 14px;
        }
        img{
            width: 10rem;
        }
    }
`
export const Conteiner = styled.div`
        background-color: var(--lightGray);
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 17rem;
        gap:22px;
        border-radius: 5px;
        align-items: center;
        
    h2{
        margin-top: 30px;
        font-size: 18px;
    }
    form{
        display: flex;
        gap: 22px;
        flex-direction: column;
        align-items: center;
    }
    form>button{
        background-color:var(--Pink) ;
        margin: 0;
    }
    @media (min-width: 765px) {
        width:26rem;
        
    form>button{
        width: 20rem;
        height: 2.8rem;
    }
    h2{
        font-size: 25px;
    }
    }
`

