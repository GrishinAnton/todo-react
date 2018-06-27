import React from 'react';
import styled from 'styled-components';

export default function HeaderBlock({ submit, input, value }){

    return (
        <Header>
            <InputCheckbox type="checkbox" />
            <Form onSubmit={submit} onChange={input}>
                <InputText type="text" value={value} name="task" placeholder="Yo Yo" />
            </Form>
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


const Form = styled.form `
    width: 100%;
`;

const InputText = styled.input`
    padding: 0; 
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
    height: 46px;

    border: none;
    font-size: 26px;
    line-height: 46px;

`;