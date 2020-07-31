import React, { Component } from 'react';
import QuestionPreview from './QuestionPreview';
import '../QuestionListStyles.css';

class QuestionList extends Component {
    state = {
        open: false
    }
    togglePanel() {
        this.setState(prevState => prevState === 'active' 
        ? this.setState({open: 'inactive'})
        : this.setState({open: 'active'})
        )
    }
    static getDerivedStateFromProps(props, state) {
        return {
            open: props.info[1]=== 'Unanswered' ? 'active' : 'inactive'
        }
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