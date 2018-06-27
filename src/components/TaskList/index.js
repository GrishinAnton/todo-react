import React from 'react'

export default function taskList() {

    return(
        <section className="main-section">
            <ul>
                <li>
                    <input className="main-section__checkbox" type="checkbox" />
                    <label className="main-section_label"></label>
                    <button className="main-section__close"></button>
                    <input type="text" className="main-section__task-edit" />
                </li>
            </ul>
        </section> 
    )
}