import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <div className="box-layout__title">
        <img src="/images/expensify-logo.png" className="logo"/>
      </div>
      <p>Keep track of your expenses.</p>
      <button className="button hvr-glow" onClick={startLogin}>Sign in with Google</button>
    </div>
  </div>
)

const mapDispatchToProps = (dispatch) => ({ 
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)