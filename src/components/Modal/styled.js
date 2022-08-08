import styled from "styled-components";
import { ToastContainer } from 'react-toastify';
export const Modal = styled.div`
    display: flex;
    width: 90%;
    height: 100vh;
    position: fixed;
    align-items: center;
    justify-content: center;
`
export const ConteinerModal = styled.div`
    width: 20rem;
    @media (min-width: 765px) {
       width:25rem;
    }
`
export const ContainerModalTitle = styled.div`
    display: flex;
    background-color:var(--grayInput) ;
    height: 2rem;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px 5px 0 0;
    padding: 0 2rem;
    
    h2{
        font-size: 11.2304px;
    }
    button{
        border: none;
        background:none;
    }
    @media (min-width: 765px) {
        height: 3rem;
       h2{
        font-size: 16px;
        }
    }
`
export const ContainerModalInput = styled.form`
    background-color: var(--lightGray);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:10px;
    border-radius:0 0 5px 5px ;
    select{
        background: var(--grayInput);
        border: 1px solid var(--grey);
        width: 15rem;
        height: 2rem;
        border-radius:5px;
        padding-left: 10px;
    }
    span{
        display: flex;
        width: 15rem;
        font-size: 9.73899px;
    }
    @media (min-width: 765px) {
       select{
        width:20rem;
        height: 3rem;
        font-size: 17px;
       }
       span{
        width:20rem;
        font-size: 17px;
       }
    }
`
export const ContainerEdit = styled.div`
    margin-top: 6px;
    display: flex;
    flex-direction: row;
    gap: 5px;
    margin-bottom: 20px;
 `
export const ButtonCad = styled.button`
    margin-bottom: 20px;
    border: none;
    background: var(--Pink);
    width: 15rem;
    height: 2rem;
    border-radius:5px;
    padding-left: 10px;
    @media (min-width: 765px) {
        margin-top: 5px;
        width: 20rem;
        height: 3rem;
        font-size: 18px;
    }
        
`
export const ButtonSave = styled.button`
    width: 155.09px;
    height: 38.37px;
    background: #59323F;
    border: none;
    border-radius: 5px;
    @media (min-width: 765px) {
        width: 199.09px;
    }

`
export const ButtonExcluir = styled.button`
    width: 78.35px;
    height: 38.37px;
    background: #868E96;
    border: none;
    border-radius: 5px;
    @media (min-width: 765px) {
        width: 105.35px;
        }
`
export const Tosti = styled(ToastContainer)`
.Toastify__toast-body {
    background: #343B41;
}
.Toastify__toast {
    background: #343B41;
}
`