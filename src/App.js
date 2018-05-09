import React from 'react'
import { Route } from 'react-router'
import Layout from './components/shared/Layout'
import Home from './components/home/Index'

export default () => (
  <Layout>
    <Route exact path="/" component={Home} />
  </Layout>
)
