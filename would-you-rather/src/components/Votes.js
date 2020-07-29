import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Nav from './Nav'

class Votes extends Component {
    render() {
        console.log(this.props)
        const { chosen, total, other } = this.props
        return (
            // <div>
            //     Votes
            // </div>
            <div>
            {chosen['text']}: {chosen['votes'].length } out of 
             {total} votes <br/>
            {other['text']}: {other['votes'].length} out of 
             {total} votes
            </div>
        )
    }
}

export default Votes
