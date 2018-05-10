import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { Panel, Grid, Row, Col } from 'react-bootstrap'
import SurveyListItem from './SurveyListItem'

it('should render response rate in percentage', () => {
  const props = {
    id: 1,
    name: 'Simple Survey',
    url: '/survey_results/1.json',
    participant_count: 6,
    response_rate: 0.8333333333333334,
    submitted_response_count: 5
  }
  const wrapper = shallow(<SurveyListItem {...props} />)

  expect(wrapper.find('.response-rate').text()).toEqual('83')
})