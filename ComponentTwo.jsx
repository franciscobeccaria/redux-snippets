import React, {useState, useEffect, useRef} from 'react'
import { addToCart } from './redux/actionCreators';
import {connect} from 'react-redux'

const ComponentTwo = ({id, addCourseToCart}) => {
    return (
        <div>
            <button onClick={() => addCourseToCart(id)}>Click me!</button>
        </div>
    )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
    addCourseToCart(id) {
        dispatch(addToCart(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ComponentTwo)
