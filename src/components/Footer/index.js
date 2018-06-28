import React from 'react';
import styled from 'styled-components';

export default function Footer({ count, endWord }) {
    
    return (
        <Footers>
            <FooterCount className="footer-count">
                <p><span>{count}</span> {endWord}</p>
            </FooterCount>
            <FooterList className="footer-panel">
                <FooterItem>
                    <button>Все</button>
                </FooterItem>
                <FooterItem>
                    <button>Активные</button>
                </FooterItem>
                <FooterItem>
                    <button>Завершенные</button>
                </FooterItem>
            </FooterList>
            <FooterTask className="footer-task-delete">
                <button>Удалить выполненные задачи</button>
            </FooterTask>
        </Footers>
    )
} 

const Footers = styled.footer `
    display: flex;
    justify-content: space-between;
    align-items: center;  
    padding-left: 5px;
    padding-right: 5px; 


    border-left: 1px solid #2c2c2c; 
    border-right: 1px solid #2c2c2c; 
    border-bottom: 1px solid #2c2c2c; 
`;

const FooterCount = styled.div `
    p {
        color: #777;
        font-size: 14px;
    }
`;

const FooterList = styled.ul `
    display: flex;

`;

const FooterItem = styled.li `

    button {
        padding: 3px;       
        color: #777;
        font-size: 14px;
        background-color: transparent;
        border: 1px solid transparent;
        margin-right: 15px; 

        transition: all .2s;

        &:hover {
            border: 1px solid #2c2c2c;
        }
    }

    &:last-child button {
        margin-right: 0;
    }
`;

const FooterTask = styled.div `

    button {
        padding: 0;

        border: none;
        background-color: transparent;
        color: #777;
        font-size: 14px;
    }

`;