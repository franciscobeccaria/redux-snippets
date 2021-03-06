import React from 'react'
import {connect} from 'react-redux'

const ComponentOne = ({cartLength}) => {
    return (
        <div>{`Cart: ${cartLength === undefined ? '' : cartLength.cart.length}`}</div>
    )
}

const mapStateToProps = state => (
    {
        cartLength: state
    }
)

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ComponentOne)
