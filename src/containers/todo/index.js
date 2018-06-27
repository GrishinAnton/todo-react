import React from 'react';
import HeaderBlock from 'components/HeaderBlock/';
import styled from 'styled-components';
import TaskList from 'components/TaskList';
import Footer from 'components/Footer';
import moment from 'moment';

export default class Todo extends React.Component {

    state = {
        tasks: [
            {
                title: '',
                complited: '',
                id: '',
            }
        ],
        mainTaskValue: ''
    }

    render() {
        return (
            <Todos>
                <Title>todos</Title>
                <HeaderBlock value={this.state.mainTaskValue} submit={this.onSubmitHandler} input={this.onInputHandler}/>
                <TaskList />
                <Footer />                
            </Todos>
        )
    }

    onSubmitHandler = e => {
        e.preventDefault()
        console.log('++213123+++'); 
        this.setState({ mainTaskValue: '' })          
        
    }   
    
    onInputHandler = e => {
        this.setState({ mainTaskValue: e.target.value})
    }
}


const Todos = styled.div`
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
`;

const Title = styled.h1`
    font-size: 100px;
    font-weight: normal;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    margin-bottom: 20px;
    margin-top: 20px;
`;



