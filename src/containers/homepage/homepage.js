import React, {Component} from 'react';
import {connect} from 'react-redux';


// Import actions

import {
    changeMessage
} from './homepage.ducks';

class Homepage extends Component {


    changeWelcomeMessage = () => {
       
        this.props.getData('Welcome to the new World.');

    }
    

    render() {

        const {welcomeMessage} = this.props.homepageData;
        
        return(

            <div style={{textAlign:'center'}}>
                <h2>An app that speaks for itself.</h2>
                <h3>{welcomeMessage}</h3>

                <button onClick={this.changeWelcomeMessage}>Change Welcome Message</button>                
            </div>
        )


    }


}


const mapStateToProps = (state) => {
    const {homepageData} = state;
    
    return {
        homepageData
    };

}

const mapDispatchToProps = (dispatch) => {

    return {
        getData: (message) => {dispatch(changeMessage(message))},
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Homepage);