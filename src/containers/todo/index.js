import React from 'react';
import HeaderBlock from 'components/HeaderBlock/';
import styled from 'styled-components';
import TaskList from 'components/TaskList';
import Footer from 'components/Footer';
import idGenerate from 'utils/idGenerate';
import endingWord from 'utils/endingWord'
export default class Todo extends React.Component {

    state = {
        tasks: [],
        mainTaskValue: '',
        taskCount: 0
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.tasks !== prevState.tasks) {
            this.activeTaskCount()
        }
    } 

    render() {

        // console.log(this.state);

        return (
            <Todos>
                <Title>todos</Title>
                <HeaderBlock 
                    value={this.state.mainTaskValue} 
                    submit={this.onSubmitHandler} 
                    input={this.onInputHandler}
                    checked={this.onAllCheckedHandler}/>
                <TaskList 
                    list={this.state.tasks} 
                    deleteItem={this.deleteTaskhandler}
                    checked={this.onTaskCheckedhandler} />
                <Footer 
                    count={this.state.taskCount} 
                    endWord={endingWord(this.state.taskCount, 'задача', 'задачи', 'задач')}
                    deleteAllTask={this.deleteAllComplitedTask}
                    />                
            </Todos>
        )
    }

    onAllCheckedHandler = e => {       
        
        var state = [...this.state.tasks]       

        state.forEach(item => {            
            item.complited = e.target.checked;
        })

        this.setState({ tasks: state });

        
    }

    onSubmitHandler = e => {
        e.preventDefault()

        var state = [...this.state.tasks]
        var obj = {
            title: this.state.mainTaskValue,
            complited: false,
            id: idGenerate()
        }

        state.push(obj);
        this.setState({ tasks: state});
        this.setState({ mainTaskValue: '' });  
    }   
    
    onInputHandler = e => {        
        this.setState({ mainTaskValue: e.target.value});
    }

    deleteTaskhandler = (id) => {
        var state = this.state.tasks
        for (var i = 0; i < state.length; i++){
            if (state[i].id === id) {
                state.splice(i,1);
            }
        }
        this.setState({ tasks: state})
        this.activeTaskCount()  
    }

    onTaskCheckedhandler = (id) => {
        var state = this.state.tasks
        for (var i = 0; i < state.length; i++) {
            if (state[i].id === id) {
                state[i].complited = !state[i].complited;
            }
        }
        this.setState({ tasks: state }) 
        this.activeTaskCount()
    }

    activeTaskCount = () => {
        var state = [...this.state.tasks]
        var count = 0

        state.forEach(item => {
            if (item.complited !== true) count++
        });

        this.setState({ taskCount: count });
    }
    
    deleteAllComplitedTask = () => {
        var state = this.state.tasks

        for (var i = 0; i < state.length; ) {
            if(state[i].complited === true) {
                state.splice(i, 1);
                i--
            }
            i++
        }
        this.setState({ tasks: state })        
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



