import React, { Component } from 'react'
import { Grid, Row, Col, PanelGroup } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { actionCreators } from '../../store/survey'
import PageTitle from '../shared/styled/PageTitle'
import Theme from './Theme'

export class Index extends Component {
  componentDidMount() {
    this.props.fetchSurveyResultDetails(this.props.match.params.id)
  }

  render() {
    const { name, themes } = this.props.surveyResultDetail

    return (
      <Grid>
        {this.props.isLoading && <h2>Loading...</h2>}

        <PageTitle>
          <span>{name}</span>
        </PageTitle>

        <Row>
          <Col sm={8} smOffset={2}>
            <PanelGroup accordion defaultActiveKey={0} id="themes">
              {themes &&
                themes.map((theme, index) => (
                  <Theme key={theme.name} {...theme} index={index} />
                ))}
            </PanelGroup>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default connect(
  state => state.surveyState,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Index)
