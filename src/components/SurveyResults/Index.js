import React, { Component } from 'react'
import { Grid, Row, Col, PanelGroup } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { actionCreators } from '../../store/survey'
import SurveyListItem from './SurveyListItem'
import PageTitle from '../shared/styled/PageTitle'

export class Index extends Component {
  componentDidMount() {
    this.props.fetchSurveyResultList()
  }

  render() {
    return (
      <Grid>
        {this.props.isLoading && <h2>Loading...</h2>}

        <PageTitle>
          <span>Survey Results</span>
        </PageTitle>
        <Row>
          <Col sm={6} smOffset={3}>
            {this.props.surveyResults &&
              this.props.surveyResults.map(survey => (
                <SurveyListItem key={survey.id} {...survey} />
              ))}
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
