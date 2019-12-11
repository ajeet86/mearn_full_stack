import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Alert = ({alerts}) => {
    return (
        <div>
            
        </div>
    )
}

Alert.propTypes = {
    alerts:propTypes.array.isRequired
}
const mapStateToProps = state =>({
    alerts:state.alert
})   
export default connect(null,)(Alert) 
