export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
  }
  
  export function format (question, author, authedUser) {
    const { id, optionOne, optionTwo, timestamp } = question
    const { name, avatarURL } = author
  
    return {
      name,
      id,
      timestamp,
      optionOne,
      optionTwo,
      avatar: avatarURL,
      authedUser //???
      }
    }

    function generateUID () {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
      }  
    
    export function formatQuestion ({optionOneText, optionTwoText, author}) {
      return {
        id: generateUID(),
        timestamp: Date.now(),
        author,
        optionOne: {
          votes: [],
          text: optionOneText,
        },
        optionTwo: {
          votes: [],
          text: optionTwoText,
        }
      }
    }