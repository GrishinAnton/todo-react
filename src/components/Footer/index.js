import React from 'react';
import styled from 'styled-components';

export default function Footer () {

    return (
        <footer className="footer">
            <div className="footer-count">
                <p><span>0</span> задач</p>
            </div>
            <ul className="footer-panel">
                <li>
                    <button>Все</button>
                </li>
                <li>
                    <button>Активные</button>
                </li>
                <li>
                    <button>Завершенные</button>
                </li>
            </ul>
            <div className="footer-count">
                <p>Удалить выполненные задачи</p>
            </div>
        </footer>
    )
} 