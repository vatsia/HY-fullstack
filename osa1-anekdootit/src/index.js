import React from 'react'
import ReactDOM from 'react-dom'
const Button = (props) => {

    return (
        <button onClick={props.handler}>{props.text}</button>
    )
}

const Votes = (props) => {

  return (
    <p>has {props.votes} votes</p>
  )
}

const MostVotedAnecdote = (props) => {

  return (
    <div>
      <h3>
        Most voted anecdote
      </h3>
      <p>{props.mostvoted}</p>
      <Votes votes={props.votes} />
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    const pts = []
    for(let i = 0; i < anecdotes.length; i++){
      pts[i] = 0;
    }
    this.state = {
      selected: 0,
      points: pts
    }
  }

  newAnecdoteHandler(){
      return () => {
            this.setState({selected: this.randomNumber(anecdotes.length - 1)})
      }
  }

  voteHandler(){
      return() => {
          const newpoints = [ ...this.state.points ]
          newpoints[this.state.selected] = newpoints[this.state.selected] + 1
          this.setState({points: newpoints})
      }
  }

  randomNumber(max){
      return Math.floor(Math.random() * max)
  }

  findMostVoted(){
    const pts = [ ...this.state.points ]
    let max = -1;
    let index = -1;
    for(let i = 0; i < pts.length; i++){
      if(pts[i] > max){
        max = pts[i];
        index = i;
      }
    }
    return index;
  }

  render() {
    return (
      <div>
        {this.props.anecdotes[this.state.selected]}
        <Votes votes={this.state.points[this.state.selected]} />
        <Button text="next anecdote" handler={this.newAnecdoteHandler()}/>
        <Button text="vote this anecdote" handler={this.voteHandler()} />

        <MostVotedAnecdote mostvoted={this.props.anecdotes[this.findMostVoted()]} votes={this.state.points[this.findMostVoted()]} />
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
