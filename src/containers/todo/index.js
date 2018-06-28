import React from 'react';
import HeaderBlock from 'components/HeaderBlock/';
import styled from 'styled-components';
import TaskList from 'components/TaskList';
import Footer from 'components/Footer';
import { idGenerate}  from 'helpers';
export default class Todo extends React.Component {

    state = {
        tasks: [],
        mainTaskValue: '',
        toggleLableInput: false
    }

    render() {

        console.log(this.state);

        return (
            <Todos>
                <Title>todos</Title>
                <HeaderBlock 
                    tasks={this.state.tasks}
                    value={this.state.mainTaskValue} 
                    submit={this.onSubmitHandler}
                    input={this.onInputHandler}
                    checked={this.onAllCheckedHandler}/>
                <TaskList 
                    list={this.state.tasks}
                    deleteItem={this.deleteTaskhandler}
                    checked={this.onTaskCheckedhandler}
                    submit={this.onSubmitChangeTask}
                    input={this.onInputListTask}
                    toggle={this.onToggleLableInput}  
                    blur={this.onInputBlur}                  
                    />
                <Footer
                    tasks={this.state.tasks}
                    deleteAllTask={this.deleteAllComplitedTask}
                    />                
            </Todos>
        )
    }

    onInputBlur = (e, id) => {
        var state = this.state.tasks
        for (var i = 0; i < state.length; i++) {
            if (state[i].id === id) {
                state[i].hide = false
                e.target.value !== '' ? state[i].title = e.target.value : state.splice(i,1);  
            }

        }
        this.setState({ tasks: state })
    }

    onToggleLableInput = (e, id) => {
        var state = this.state.tasks
        for (var i = 0; i < state.length; i++) {
            if (state[i].id === id) {
                state[i].hide = true
            }

        }
        this.setState({ tasks: state })
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

    onSubmitChangeTask = (e,id) => {
        e.preventDefault()

        var state = this.state.tasks
        for (var i = 0; i < state.length; i++) {
            if (state[i].id === id) {     
                e.target.task.value !== '' ? state[i].title = e.target.task.value : state.splice(i,1);                
            }
            
        }
        this.setState({ tasks: state })

    }

    onInputListTask = (e,id) => {

        var state = this.state.tasks
        for (var i = 0; i < state.length; i++) {
            if (state[i].id === id) {
                state[i].title = e.target.value
            }
        }
        this.setState({ tasks: state })
        
    }
    
    onInputHandler = e => {        
        this.setState({ mainTaskValue: e.target.value });
    }

    deleteTaskhandler = (id) => {
        var state = this.state.tasks
        for (var i = 0; i < state.length; i++){
            if (state[i].id === id) {
                state.splice(i,1);
            }
        }
        this.setState({ tasks: state })
    }

    onTaskCheckedhandler = (id) => {
        var state = this.state.tasks
        for (var i = 0; i < state.length; i++) {
            if (state[i].id === id) {
                state[i].complited = !state[i].complited;
            }
        }
        this.setState({ tasks: state }) 
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



