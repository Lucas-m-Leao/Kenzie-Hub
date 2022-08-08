import styled from "styled-components";

export const Container = styled.section`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Div = styled.div`
    width: 90%;
    @media (min-width: 768px) {
    width:65%;
  }
`

export const ContainerTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom:solid 1px var(--grey);
    height: 4rem;
    
    img{
        width: 105.53px;
        height: 14.63px;
    }
    button{
        width: 55.54px;
        height: 31.95px;
        background: #212529;
        border-radius: 4px;
        border: none;
    }
    
`
export const ContainerPa = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom:solid 1px var(--grey);
    height: 6rem;
    gap:5px;

    h1{
        font-size: 18px;
    }
    span{
        font-size: 12px;  
    }
    @media (min-width: 765px) {
        h1{
            font-size: 22px;
        }
        span{
            font-size: 16px;
        }
    }
    `
export const ContainerTec = styled.div`
        display: flex;
        justify-content: space-between;
        height: 4rem;
        align-items: center;
    h2{
        font-size: 16px;
    }
    button{
        width: 32px;
        height: 32px;
        background: #212529;
        border-radius: 4px;
        border: none;
        font-size: 25px;}
    @media (min-width: 765px) {
        h2{
            font-size: 19px;
        }
        }
    
`
export const ContainerUl = styled.ul`
    display: flex;
    flex-direction: column;
    gap:15px;
    background-color:var(--grayInput);
    border-radius: 5px;
    padding: 20px 10px;
    margin-bottom: 50px;
    li{
        
        padding: 12.182px;
        background-color: #121214;
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        cursor: pointer;
    }
    h2{
        font-size:14.21px ;
        cursor: pointer;
    }
    span{
        cursor: pointer;
        font-size: 12.18px;
    }
    @media (min-width: 765px) {
        h2{
            font-size: 18px;
        }
        span{
            font-size: 18px;
        }
    }
`

