import _ from 'lodash'
import surveyService from '../services/surveyService'

export const REQUEST_SURVEY_RESULTS = 'REQUEST_SURVEY_RESULTS'
export const RECEIVE_SURVEY_RESULTS = 'RECEIVE_SURVEY_RESULTS'
export const REQUEST_SURVEY_RESULT_DETAIL = 'REQUEST_SURVEY_RESULT_DETAIL'
export const RECEIVE_SURVEY_RESULT_DETAIL = 'RECEIVE_SURVEY_RESULT_DETAIL'

export const initialState = {
  isLoading: false,
  error: null,
  surveyResults: [],
  surveyResultDetail: {}
}

export const actionCreators = {
  fetchSurveyResultList: () => async (dispatch, getState) => {
    dispatch({ type: REQUEST_SURVEY_RESULTS })

    try {
      const response = await surveyService.fetchSurveyResultList()
      return dispatch({ type: RECEIVE_SURVEY_RESULTS, ...response })
    } catch (error) {
      return dispatch({ type: RECEIVE_SURVEY_RESULTS, error })
    }
  },

  fetchSurveyResultDetails: () => async (dispatch, getState) => {
    dispatch({ type: REQUEST_SURVEY_RESULT_DETAIL })

    try {
      const response = await surveyService.fetchSurveyResultList()
      return dispatch({ type: RECEIVE_SURVEY_RESULT_DETAIL, ...response })
    } catch (error) {
      return dispatch({ type: RECEIVE_SURVEY_RESULT_DETAIL, error })
    }
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SURVEY_RESULTS:
    case REQUEST_SURVEY_RESULT_DETAIL: {
      return {
        ...state,
        isLoading: true
      }
    }

    case RECEIVE_SURVEY_RESULTS: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
        surveyResults: action.survey_results
      }
    }

    case RECEIVE_SURVEY_RESULT_DETAIL: {

        const detail = {...action.survey_result_detail}

        _.each(detail.themes, theme => _.each(theme.questions, question => {
            const total = _.sumBy(question.survey_responses, resp => Number(resp.response_content))
            const responseCount = _.filter(
                question.survey_responses,
                resp => resp.response_content
            ).length
            const avg = total / responseCount
            question.average = avg
        }))
      
      return {
        ...state,
        isLoading: false,
        error: action.error,
        surveyResultDetail: detail
      }
    }

    default:
      return state
  }
}
