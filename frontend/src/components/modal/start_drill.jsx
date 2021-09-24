import React from "react";
import { connect } from "react-redux";
import { updateDisasterDrill, fetchDisasterDrills } from '../../actions/disaster_drill_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import { AiOutlineClose } from 'react-icons/ai'
import '../profile/profile.css';

// import "./profile.css";

class StartDrill extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            milliseconds: 0,
            seconds: 0,
            minutes: 0,
            start: null
        }

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.handleModal = this.handleModal.bind(this);

    }

    handleModal(e) {
        e.preventDefault();
        this.props.closeModal();
    }

    start() {
        this.state.start = setInterval(() => {
            this.setState({ milliseconds: this.state.milliseconds + 1 })
            if (this.state.milliseconds > 250) {
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

    handleTime(e){
        e.preventDefault()
        this.props.updateDisasterDrill(this.props.drillId, {timeToComplete: `${this.state.minutes} : ${this.state.seconds} : ${this.state.milliseconds}`})
            .then(() => this.props.openModal('editDrill', this.props.drillId))
    }

    stop() {
        clearInterval(this.state.start)
    }

    render() {
        let milliseconds = this.state.milliseconds < 10 ? <div>0{this.state.milliseconds}</div> : <div>{this.state.milliseconds}</div>
        let seconds = this.state.seconds < 10 ? <div>0{this.state.seconds}</div> : <div>{this.state.seconds}</div>
        let minutes = this.state.minutes < 10 ? <div>0{this.state.minutes}</div> : <div>{this.state.minutes}</div>

        return (
            <div>
                <div className="timer">
                    <h2>Stopwatch</h2>
                    <p onClick={this.handleModal}><AiOutlineClose className="close-x" /></p>
                    <div>{minutes} : {seconds} : {milliseconds}</div>
                    {/* <div>{this.state.seconds}</div>
                    <div>{this.state.minutes}</div> */}
                </div>
                <div>
                    <button onClick={() => this.start()}>Start</button>
                    <button onClick={() => this.stop()}>Stop</button>
                    <button onClick={this.handleTime}>Save</button>
                </div>
            </div>

        )
    }
}

const mSTP = ({ entities, session }, ownProps) => {
    return {
        drillId: ownProps.drillId,
        currentUser: session.user.id,
        drill: Object.values(entities.drills).filter(drill => drill._id === ownProps.drillId)[0]

    };
};

const mDTP = (dispatch) => {
    return {
        openModal: (modal, id) => dispatch(openModal(modal, id)),
        closeModal: () => dispatch(closeModal()),
        updateDisasterDrill: (drillId, disasterDrill) => dispatch(updateDisasterDrill(drillId, disasterDrill))
    };
};

export default connect(mSTP, mDTP)(StartDrill);
