import React from 'react';
import Task from 'components/Task'
import styled from 'styled-components';
import { baseColors } from 'css';
import { filterTasks } from 'helpers/';

export default function taskList({ list = [], deleteItem, checked, input, submit, toggle, blur, filter }) {   
    
    return(
        <MainSection>
            <List>
                {filterTasks(list, filter).map((item, key) => (
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