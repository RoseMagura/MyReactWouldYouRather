import React, { Component } from 'react';
import Question from './Question'

class QuestionList extends React.Component {
    state = {
        open: false
    }
    // this.togglePanel = this.toggelPanel.bind(this);
    togglePanel(e) {
        this.setState({open: !this.state.open})
    }

    render() {
        const which = this.props.info[0]
        console.log(which)
        const questionsIds = this.props.info[1]
        const type = this.props.info[2]
        return(
            <div>
                <h3>{type} Questions</h3>
                <ul className='homepage-list'>
                    {which.map((id) => (
                            // !(id in which) && 
                        <li key={id}>
                            <Question id={id} />
                        </li>
                        ))}
                </ul>   
            </div>
        )
    }
}

export default QuestionList