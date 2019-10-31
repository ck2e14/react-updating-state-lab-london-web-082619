import React from 'react';

export default class DigitalClicker extends React.Component{

    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }

    render(){
        return(
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

}
