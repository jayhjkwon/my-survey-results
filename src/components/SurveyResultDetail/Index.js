import React, { Component } from 'react'
import { Grid, Row, Col, PanelGroup } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { actionCreators } from '../../store/survey'
export class Index extends Component {
  render() {
    return <h1>Survey Result Detail</h1>
  }
}

export default connect(
  state => state.surveyState,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Index)

