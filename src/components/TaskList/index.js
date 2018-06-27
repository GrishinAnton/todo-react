import React from 'react';
import Task from 'components/Task'
import styled from 'styled-components';
import { baseColors, baseFonts } from 'css'

export default function taskList() {

    return(
        <MainSection>
            <List>
                <Task />
            </List>
        </MainSection> 
    )
}

const MainSection = styled.section `
    height: 48px;
`;

const List = styled.ul `
    text-align: left;
    border-left: 1px solid ${baseColors.grey};
    border-right: 1px solid ${baseColors.grey};
`;