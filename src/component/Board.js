import React, { Component } from 'react'
import Square from './Square';
import style from '../style/board.module.css'

export default class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }
    startGame(){
        this.setState({
            squares: Array(9).fill(null),
            xIsNext: true,
        })
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X': 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        return( <Square value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}/>
        )
    }

    render() {
        const winner = calculateWinner(this.state.squares);

        let status;
        if(winner) {
            status = 'Winner: ' + winner;
        }
        else{
            if(isGameOver(this.state.squares)){
                status = 'Game over'
            }
            else{
                status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
            }
            
        }

        return (
            <div>
                <div className={style.button}><button onClick={()=>this.startGame()}>Start Game</button></div>
                <div className={style.status}>{status}</div>
                <div className={style.boardRow}>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className={style.boardRow}>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className={style.boardRow}>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function isGameOver(squares){
    for(let item of squares){
        if(!item){
            return item;
        }
    }
    return true
  }
  