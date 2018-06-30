import React from 'react'; 
import styled from 'styled-components';
import { baseColors, baseFonts } from 'css'

export default function Task({ title, deleteItem, id, checked, complited, input, submit, toggle, hide, blur }) {  
    
    var textInput = React.createRef();
    

    function handleClick(id) {        
        toggle(id)     
        console.log(textInput.current);
        textInput.current.focus()
        
    }
  
    return (
        <Item>
            <InputCheckbox 
                checked={complited} 
                onChange={() => checked(id)} 
                className="main-section__checkbox" type="checkbox" />
            <Label 
                complited={complited} 
                hide={hide}
                onDoubleClick={() => handleClick(id)} 
                className="main-section_label">{title}</Label>
            <ButtonDelete 
                className="main-section__close" 
                onClick={() => deleteItem(id)}>
            </ButtonDelete>
            <InputForm 
                onSubmit={(e) => submit(e,id)}>
                <InputTask type="text" 
                    onBlur={(e) => blur(e, id)} 
                    onChange={(e) => input(e, id)} 
                    value={title} 
                    innerRef={textInput}
                    hide={hide}
                    name="task" 
                    className="main-section__task-edit" />
            </InputForm>
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
    display: ${props => props.hide && 'none'};
    user-select: none;
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

const InputForm = styled.form`
    position: absolute;
    left: 44px;
    height: 47px;
    width: 85%;

`;

const InputTask = styled.input `
    width: 100%;
    height: 100%;

    ${baseFonts}
    display: none;

    display: ${props => props.hide && 'block'};

    border: none;
    outline: none;
    z-index: 0;
    user-select: none;

`;