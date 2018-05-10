import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { Panel, Grid, Row, Col } from 'react-bootstrap'
import { Index } from './Index'

it('should call fetchSurveyResultDetails once component mounted', () => {
  const props = {
    fetchSurveyResultDetails: jest.fn(),
    surveyResultDetail: {},
    match: {
      params: {
        id: 1
      }
    }
  }
  const wrapper = shallow(<Index {...props} />)

  expect(props.fetchSurveyResultDetails.mock.calls.length).toEqual(1)
})
