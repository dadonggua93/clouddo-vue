import * as API from './'

export default {
  list: params => {
    return API.POST('/api-base/log/listPage', params)
  },
  remove: params => {
    return API.DELETE('/api-base/log', params)
  }
}
