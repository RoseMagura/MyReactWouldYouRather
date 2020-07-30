import React, { Component } from 'react';
import QuestionPreview from './QuestionPreview';
import '../QuestionListStyles.css';

class QuestionList extends Component {
    state = {
        open: this.props.info[1] === 'Unanswered' ? 'active' : 'inactive'
    }
    togglePanel() {
        this.setState(prevState => prevState === 'active' 
        ? this.setState({open: 'inactive'})
        : this.setState({open: 'active'})
        )
    }

    render() {
        const questions = this.props.info[0]
        return(
            <div>
                <ul className='content'>
                    {questions.map((id) => (
                        <li key={id}>
                            <QuestionPreview id={id} />
                        </li>
                        ))}
                </ul>   
            </div>
        )
    }
}

export default QuestionList