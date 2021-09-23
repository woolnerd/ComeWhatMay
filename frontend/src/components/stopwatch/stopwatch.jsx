import React from "react";
import { RiExchangeFundsFill } from "react-icons/ri";


class Stopwatch extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            milliseconds: 0,
            seconds: 0, 
            minutes: 0,
            start: null
        }

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
    }

    start(){
        console.log("in start")
        this.state.start = setInterval(() => {
            this.setState({milliseconds: this.state.milliseconds + 1})
            if(this.state.milliseconds > 999){
                this.setState({
                    seconds: this.state.seconds + 1, 
                    milliseconds: 0
                })
            }
            if (this.state.seconds > 59) {
                this.setState({
                    seconds: 0,
                    minutes: this.state.minutes + 1
                })
            }

            }, 1);
    }

    stop(){
        console.log("in stop")
        clearInterval(this.state.start)
    }

    render(){
        let milliseconds = this.state.milliseconds < 10 ? <div>0{this.state.milliseconds}</div> : <div>{this.state.milliseconds}</div>
        let seconds = this.state.seconds < 10 ? <div>0{this.state.seconds}</div> : <div>{this.state.seconds}</div>
        let minutes = this.state.minutes < 10 ? <div>0{this.state.minutes}</div> : <div>{this.state.minutes}</div>

        return(
            <div>
                <div className="timer">
                    <div>{minutes} : {seconds} : {milliseconds}</div>
                    {/* <div>{this.state.seconds}</div>
                    <div>{this.state.minutes}</div> */}
                </div>
                <div>
                    <button onClick={() => this.start()}>Start</button>
                    <button onClick={() => this.stop()}>Stop</button>
                </div>
            </div>

        )
    }
}

export default Stopwatch;