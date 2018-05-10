import React from 'react'
import { Panel, Grid, Row, Col } from 'react-bootstrap'
import Question from './Question'

export default props => {
  return (
    <Panel bsStyle="primary" eventKey={props.index}>
      <Panel.Heading>
        <Panel.Title toggle>{props.name}</Panel.Title>
      </Panel.Heading>
      <Panel.Body collapsible>
        {props.questions.map(question => (
          <Question key={question.description} {...question} />
        ))}
      </Panel.Body>
    </Panel>
  )
}
