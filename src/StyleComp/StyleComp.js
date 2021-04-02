import React from 'react';
import styled from 'styled-components';

const ParagraphNormal= styled.p` /*viết code CSS thẳng luôn nè*/
    background-color: red;
    border: 1px solid black dash;
    color: yellow;
    text-decoration: underline;
`
const DivBase= styled.div`
    text-align: left;
`

const styleComp=()=>{
    return (
        
        <DivBase>
        {/* Ta thay div bọc ngoài thành cái component vừa tự tạo */}
        {/* <div> */} 
                <hr/>
                <h1>DÙNG STYLED COMPONENT</h1>
                <ParagraphNormal> Để css inline, internal và code css này sẽ dùng được dù cho xài trong file JAVASCRIPT</ParagraphNormal>
                <p>Styled Component lib là các code được xây dựng sẵn, nó convert ngầm code CSS trong file js, sang CSS </p>
                
        {/* </div> */}
        </DivBase>
    );
};
export default styleComp;