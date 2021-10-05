import React, { Component } from 'react'
import Board from './Board'
import style from '../style/game.module.css'
export default class Game extends Component {
    render(){
        return (
            <div className={style.game}>
                <div className='game-board'>
                    <Board />
                </div>
                <div className={style.gameInfo}>
                    <div>{/* status */}</div>
                    <div>{/* TODO */}</div>
                </div>
            </div>
        )
    }
}
