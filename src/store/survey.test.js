import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import fetchMock from 'fetch-mock'
import {
  actionCreators,
  reducer,
  initialState,
  REQUEST_SURVEY_RESULTS,
  RECEIVE_SURVEY_RESULTS,
  REQUEST_SURVEY_RESULT_DETAIL,
  RECEIVE_SURVEY_RESULT_DETAIL
} from './survey'

describe('actionCreators', () => {
  const mockedDispatch = payload => payload

  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('should have the properties', () => {
    expect(actionCreators).toHaveProperty('fetchSurveyResultList')
    expect(actionCreators).toHaveProperty('fetchSurveyResultDetails')
  })

  it('fetchSurveyResultList action creator should create RECEIVE_SURVEY_RESULTS action type', async () => {
    fetchMock.get('/api/survey_results', {})
    const action = await actionCreators.fetchSurveyResultList()(mockedDispatch)
    expect(action.type).toEqual(RECEIVE_SURVEY_RESULTS)
  })

  it('fetchSurveyResultDetails action creator should create RECEIVE_SURVEY_RESULT_DETAIL action type', async () => {
    fetchMock.get('/api/survey_results/1', {})
    const action = await actionCreators.fetchSurveyResultDetails(1)(
      mockedDispatch
    )
    expect(action.type).toEqual(RECEIVE_SURVEY_RESULT_DETAIL)
  })
})

describe('reducer', () => {
  it('should return initial state', () => {
    const state = reducer(undefined, {})
    expect(state).toEqual({
      isLoading: false,
      error: null,
      surveyResults: [],
      surveyResultDetail: {}
    })
  })

  it('should handle REQUEST_SURVEY_RESULTS action type', () => {
    const state = reducer(undefined, {
      type: REQUEST_SURVEY_RESULTS
    })
    expect(state.isLoading).toEqual(true)
  })

  it('should handle REQUEST_SURVEY_RESULT_DETAIL action type', () => {
    const state = reducer(undefined, {
      type: REQUEST_SURVEY_RESULT_DETAIL
    })
    expect(state.isLoading).toEqual(true)
  })

  it('should handle RECEIVE_SURVEY_RESULTS action type', () => {
    const state = reducer(undefined, {
      type: RECEIVE_SURVEY_RESULTS,
      survey_results: [
        {
          name: 'Simple Survey',
          url: '/survey_results/1.json',
          participant_count: 6,
          response_rate: 0.8333333333333334,
          submitted_response_count: 5
        },
        {
          name: 'Acme Engagement Survey',
          url: '/survey_results/2.json',
          participant_count: 271,
          response_rate: 1.0,
          submitted_response_count: 271
        }
      ]
    })
    expect(state.isLoading).toEqual(false)
    expect(state.surveyResults.length).toEqual(2)
    expect(state.surveyResults[0].name).toEqual('Simple Survey')
    expect(state.surveyResults[0].url).toEqual('/survey_results/1.json')
    expect(state.surveyResults[0].participant_count).toEqual(6)
    expect(state.surveyResults[0].response_rate).toEqual(0.8333333333333334)
    expect(state.surveyResults[0].submitted_response_count).toEqual(5)
  })

  it('RECEIVE_SURVEY_RESULT_DETAIL action type should return correct average rate', () => {
    const state = reducer(undefined, {
      type: RECEIVE_SURVEY_RESULT_DETAIL,
      survey_result_detail: {
        name: 'Simple Survey',
        url: '/survey_results/1',
        participant_count: 6,
        response_rate: 0.8333333333333334,
        submitted_response_count: 5,
        themes: [
          {
            name: 'The Work',
            questions: [
              {
                description: 'I like the kind of work I do.',
                question_type: 'ratingquestion',
                survey_responses: [
                  {
                    id: 1,
                    question_id: 1,
                    respondent_id: 1,
                    response_content: '5'
                  },
                  {
                    id: 6,
                    question_id: 1,
                    respondent_id: 2,
                    response_content: '4'
                  },
                  {
                    id: 11,
                    question_id: 1,
                    respondent_id: 3,
                    response_content: '5'
                  },
                  {
                    id: 16,
                    question_id: 1,
                    respondent_id: 4,
                    response_content: '5'
                  },
                  {
                    id: 21,
                    question_id: 1,
                    respondent_id: 5,
                    response_content: '4'
                  },
                  {
                    id: 26,
                    question_id: 1,
                    respondent_id: 6,
                    response_content: ''
                  }
                ]
              },
              {
                description:
                  'In general, I have the resources (e.g., business tools, information, facilities, IT or functional support) I need to be effective.',
                question_type: 'ratingquestion',
                survey_responses: [
                  {
                    id: 2,
                    question_id: 2,
                    respondent_id: 1,
                    response_content: '5'
                  },
                  {
                    id: 7,
                    question_id: 2,
                    respondent_id: 2,
                    response_content: '5'
                  },
                  {
                    id: 12,
                    question_id: 2,
                    respondent_id: 3,
                    response_content: '5'
                  },
                  {
                    id: 17,
                    question_id: 2,
                    respondent_id: 4,
                    response_content: '5'
                  },
                  {
                    id: 22,
                    question_id: 2,
                    respondent_id: 5,
                    response_content: '5'
                  },
                  {
                    id: 27,
                    question_id: 2,
                    respondent_id: 6,
                    response_content: ''
                  }
                ]
              }
            ]
          }
        ]
      }
    })

    expect(state.isLoading).toEqual(false)
    expect(state.surveyResultDetail.themes[0].questions[0].average).toEqual(
      23 / 5
    )
    expect(state.surveyResultDetail.themes[0].questions[1].average).toEqual(
      25 / 5
    )
  })
})
