import React from 'react';

const Votes = (props) => {
        const { chosen, total, other, author } = props
        const chosenLength = chosen['votes'].length
        const otherLength = other['votes'].length
        const chosenPercentage = (chosenLength/total * 100).toFixed(1)
        const otherPercentage = (otherLength/total * 100).toFixed(1)
        return (
            <div>
                <h1>Asked by {author['name']}</h1>
                <img 
                    width='100'
                    height='100' 
                    src={author['avatarURL']}
                    alt={`Avatar of ${author['name']}`}
                    className='avatar'
                    />
                <h2>Results:</h2>
                    <p>{chosen['text']}: {chosenLength } out of {total} 
                    {total > 1 ? ` votes` : ` vote `} / {` `}
                    {chosenPercentage}% (Your Vote) <br/></p>
                    <p>{other['text']}: {otherLength} out of {total} 
                    {total > 1 ? ` votes` : ` vote `} / {` `}
                    {otherPercentage}%</p>
            </div>
        )
}

export default Votes
