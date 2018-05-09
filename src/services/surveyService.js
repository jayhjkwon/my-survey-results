class SurveyService {
  async fetchSurveyResultList() {
    try {
      const response = await fetch('/api/survey_results')
      const json = await response.json()

      if (response.ok) {
        return json
      }

      throw json
    } catch (error) {
      throw error
    }
  }

  async fetchSurveyResultDetails(id) {
    try {
      const response = await fetch(`/api/survey_results/${id}`)
      const json = await response.json()

      if (response.ok) {
        return json
      }

      throw json
    } catch (error) {
      throw error
    }
  }
}

export default new SurveyService()
