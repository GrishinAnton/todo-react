import React from 'react';
import styled from 'styled-components';

export default function HeaderBlock(){

    return (
        <Header>
            <InputCheckbox type="checkbox" />
            <InputText type="text" placeholder="Yo Yo" />
        </Header>
    )

}

const Header = styled.header`
    display: flex;
    align-items: center;
    height: 50px;

    border: 1px solid #2c2c2c;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

const InputCheckbox = styled.input`
    position: relative;
    width: 30px;
    height: 48px;
`;

const InputText = styled.input`
    padding: 0; 
    padding-left: 10px;
    width: 100%;
    height: 46px;

    border: none;
    font-size: 26px;
    line-height: 46px;

`;