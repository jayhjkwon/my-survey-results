import React from 'react'
import { Panel, Grid, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import styled from 'styled-components'

export default props => {
  const responseRate = (props.response_rate * 100).toFixed()

  return (
    <LinkContainer to={`/surveys/${props.id}`}>
      <StyledPanel bsStyle="primary">
        <PanelHeading>
          <Panel.Title>{props.name}</Panel.Title>
        </PanelHeading>
        <Panel.Body>
          <Row>
            <Col xs={4}>
              <Circle>
                <div>
                  <span className="response-rate">{responseRate}</span>
                  <span className="percentage">%</span>
                </div>
              </Circle>
              <SubTitle>Response Rate</SubTitle>
            </Col>
            <Col xs={4}>
              <Circle>
                <div>
                  <span>{props.participant_count}</span>
                </div>
              </Circle>
              <SubTitle>Participant Count</SubTitle>
            </Col>
            <Col xs={4}>
              <Circle>
                <div>
                  <span>{props.submitted_response_count}</span>
                </div>
              </Circle>
              <SubTitle>Response Count</SubTitle>
            </Col>
          </Row>
        </Panel.Body>
      </StyledPanel>
    </LinkContainer>
  )
}

const StyledPanel = styled(Panel)`
  margin: 0 0 2rem 0 !important;
`

const PanelHeading = styled(Panel.Heading)`
  cursor: pointer;
`

const Circle = styled.div`
  width: 140px;
  height: 140px;
  margin: 0 auto;
  color: #337ab7;
  background-color: #aaf0d8;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 3rem;
  font-weight: 600;

  span.percentage {
    font-size: 1rem;
    font-weight: 300;
    padding-left: 2px;
  }

  @media(max-width: 1200px) {
      width: 90px;
      height: 90px;
      font-size: 2rem;
  }
`

const SubTitle = styled.div`
  font-size: 0.8rem;
  margin: 1rem 0 0 0;
`
