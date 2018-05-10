import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { Panel, Grid, Row, Col } from 'react-bootstrap'
import Question from './Question'

it('should render average number with only one decimal ', () => {
  const props = {
    description: 'test',
    average: 1.23456
  }
  const wrapper = mount(<Question {...props} />)

  expect(wrapper.find('p.average').text()).toEqual('1.2')
})
