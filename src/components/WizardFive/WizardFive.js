import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateREA } from '../../ducks/reducer';

class WizardFive extends Component {

    render(){
        const { updateREA } = this.props;

        return(
            <div className="parent-div">
                    <div className="vert-align">    

                    <p>Are you currently working with a real estate agent?</p> <br />
                    <div className="row">
                        <Link to="/wSix"><button onClick={e => updateREA( true )}>Yes</button></Link>
                        <Link to="/wSix"><button onClick={e => updateREA( false )}>No </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { REA } = state;

    return {
        REA
    }
}

export default connect( mapStateToProps, { updateREA } )( WizardFive );