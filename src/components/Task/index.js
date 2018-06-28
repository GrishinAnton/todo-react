import React from 'react';
import styled from 'styled-components';
import { baseColors, baseFonts } from 'css'

export default function Task({ title, deleteItem, id, checked, complited }) {     
   
    return (
        <Item>
            <InputCheckbox checked={complited} onChange={() => checked(id)} className="main-section__checkbox" type="checkbox" />
            <Label complited={complited} className="main-section_label">{title}</Label>
            <ButtonDelete className="main-section__close" onClick={() => deleteItem(id)}></ButtonDelete>
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

    &:hover button {
        opacity: 1;
    }

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
    text-decoration: ${props => props.complited && 'line-through'};
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
    transition: all 0.2s ease-out;
    outline: none;
    opacity: 0;

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