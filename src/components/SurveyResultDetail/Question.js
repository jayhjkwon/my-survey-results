import React from 'react'
import { Panel, Grid, Row, Col } from 'react-bootstrap'
import { Doughnut } from 'react-chartjs-2'
import _ from 'lodash'
import styled from 'styled-components'

export default props => {
  const data = {
    labels: ['5', '4', '3', '2', '1'],
    datasets: [
      {
        data: [
          _.countBy(
            props.survey_responses,
            resp => resp.response_content === '5'
          ).true,
          _.countBy(
            props.survey_responses,
            resp => resp.response_content === '4'
          ).true,
          _.countBy(
            props.survey_responses,
            resp => resp.response_content === '3'
          ).true,
          _.countBy(
            props.survey_responses,
            resp => resp.response_content === '2'
          ).true,
          _.countBy(
            props.survey_responses,
            resp => resp.response_content === '1'
          ).true
        ],
        backgroundColor: [
          '#FF4500',
          '#FF7F50',
          '#FF8C00',
          '#FFA500',
          '#FFD700'
        ],
        hoverBackgroundColor: [
          '#FF4500',
          '#FF7F50',
          '#FF8C00',
          '#FFA500',
          '#FFD700'
        ]
      }
    ]
  }

  return (
    <StyledRow>
      <StyledCol xs={6}>
        <Description>
          <p>{props.description}</p>
          <Average className="average">{props.average.toFixed(1)}</Average>
        </Description>
      </StyledCol>
      <Col xs={6}>
        <Doughnut data={data} options={{ legend: { display: false } }} />
      </Col>
    </StyledRow>
  )
}

const StyledRow = styled(Row)`
  padding: 1rem 0;
  height: 200px;
  border-bottom: solid 1px #eee;
`

const StyledCol = styled(Col)`
  height: 100%;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  text-align: right;
`

const Average = styled.p`
  font-size: 2rem;
  text-align: right;
`
