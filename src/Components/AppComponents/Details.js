import React from 'react'
import {connect} from 'react-redux'
// import {useHistory, useParams} from 'react-router-dom'
function Details(props) {
    return (
        <div>
            <h1>Details</h1>
        </div>
    )
}
const mapStateToProps =(state)=>({
    user:state.userListReducer.user
})
export default connect(mapStateToProps)(Details)