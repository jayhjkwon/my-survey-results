import React from 'react'
import { Route } from 'react-router'
import Layout from './components/shared/Layout'
import SurveyResults from './components/SurveyResults/Index'
import SurveyResultDetail from './components/SurveyResultDetail/Index'

export default () => (
  <Layout>
    <Route exact path="/" component={SurveyResults} />
    <Route path="/surveys/:id" component={SurveyResultDetail} />
  </Layout>
)
