import React from 'react';
import Task from 'components/Task'
import styled from 'styled-components';
import { baseColors, baseFonts } from 'css';
import { TransitionMotion, spring, presets } from 'react-motion';

export default function taskList({ list = [], deleteItem, checked, input, submit, toggle }) {  

    return(
        <MainSection>
            <List>
                {list.map(item => (
                    <Task 
                        key={item.id} 
                        title={item.title}
                        deleteItem={deleteItem} 
                        id={item.id}
                        checked={checked}
                        complited={item.complited}
                        input={input}
                        submit={submit}
                        toggle={toggle} />
                ))}                
            </List>
        </MainSection> 
    )
}

const MainSection = styled.section `
   
`;

const List = styled.ul `
    text-align: left;
    border-left: 1px solid ${baseColors.grey};
    border-right: 1px solid ${baseColors.grey};
`;