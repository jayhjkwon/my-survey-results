import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { Panel, Grid, Row, Col } from 'react-bootstrap'
import { Index } from './Index'

it('should call fetchSurveyResultList once component mounted', () => {
  const props = {
    fetchSurveyResultList: jest.fn()
  }
  const wrapper = shallow(<Index {...props} />)

  expect(props.fetchSurveyResultList.mock.calls.length).toEqual(1)
})
