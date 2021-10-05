import React, { Component } from 'react'
import style from '../style/square.module.css'
export default class Square extends Component {
    constructor(props){
        super(props);
    }
    render(){
       return (
            <button className={style.square} 
            onClick={()=> this.props.onClick()}>
                {this.props.value}
            </button>
        )
    }
}
