import React from 'react';
import styled from 'styled-components';
const Div=styled.div`
div{
height: 80vh;
width: 100%;
display: flex;
}  
h1{
    margin: auto;

} 
`
function Erro (){
    return(

        <Div >
            <div>
            <h1>Ops Erro</h1>
            </div>
        </Div>
    )
}export default Erro