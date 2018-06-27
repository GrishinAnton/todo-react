import React from 'react';
import styled from 'styled-components';
import { baseColors, baseFonts } from 'css'

export default function Task() {

    return (
        <Item>
            <InputCheckbox className="main-section__checkbox" type="checkbox" />
            <Label className="main-section_label">taskTask</Label>
            <ButtonDelete className="main-section__close"></ButtonDelete>
            <InputTask type="text" className="main-section__task-edit" />
        </Item>
    )
}

const Item = styled.li `
    height: 48px;
    display: flex;
    align-items: center;
    padding-right: 10px;
    position: relative;

    border-bottom: 1px solid #2c2c2c;

`;

const InputCheckbox = styled.input `
    width: 30px;
    height: 100%;
    margin-right: 10px;
`;

const Label = styled.label `
    position: relative;

    margin-right: auto;
    ${baseFonts}
    z-index: 1;
`;

const ButtonDelete = styled.button `
    position: relative;

    width: 40px;
    height: 40px;
    margin: auto 0;

    background-color: transparent;
    border: none;
    color: #cc9a9a;
    font-size: 30px;
    transition: color 0.2s ease-out;
    outline: none;

    &::after {
        content: '×';
    }

`;
const InputTask = styled.input `
    position: absolute;
    left: 44px;
    height: 47px;
    width: 85%;

    border: none;
    outline: none;
    z-index: 0;
`;