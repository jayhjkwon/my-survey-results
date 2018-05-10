import React, { Component } from 'react'
import { Grid, Row, Col, PanelGroup } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { actionCreators } from '../../store/survey'
import SurveyListItem from './SurveyListItem'

export class Index extends Component {
  componentDidMount() {
    this.props.fetchSurveyResultList()
  }

  render() {
    return (
      <Grid>
        <TitleContainer>
          <Title>Survey Results</Title>
        </TitleContainer>
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

const TitleContainer = styled.h1`
  margin: 3rem 0;
`

const Title = styled.span`
  border-bottom: solid 1px #ddd;
  padding: 0 1rem 0.8rem 1rem;
`

export default connect(
  state => state.surveyState,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Index)
