import React from 'react';
import Task from 'components/Task'
import styled from 'styled-components';
import { baseColors, baseFonts } from 'css';
import { TransitionMotion, spring, presets } from 'react-motion';

export default function taskList({ list = [], deleteItem, checked, input, submit, toggle, blur, filter }) {  
    //здесь будет фильтрация
    var filterTasks = list.filter(item => {
        if (filter === 'all') {
             return item
        }

        if (filter === 'active') {
            return item.complited === false
        }

       if (filter === 'complited') {
            return item.complited === true
        }
    })
   
   
    
    return(
        <MainSection>
            <List>
                {filterTasks.map((item, key) => (
                    <Task 
                        key={key} 
                        title={item.title}
                        deleteItem={deleteItem} 
                        id={item.id}
                        checked={checked}
                        complited={item.complited}
                        input={input}
                        submit={submit}
                        toggle={toggle}
                        hide={item.hide}
                        blur={blur} />
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