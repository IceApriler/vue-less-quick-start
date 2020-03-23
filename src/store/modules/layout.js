import { storage } from '../../utils/mount'

export default {
  namespaced: true,
  state: {
    isCollapsed: storage.get('isCollapsed') === false ? false : true
  },
  getters: {
    isCollapsed(state) {
      return state.isCollapsed
    }
  },
  mutations: {
    updateState(state, params) {
      return { ...state, ...params }
    },
    toggleSideBar(state) {
      state.isCollapsed = !state.isCollapsed
      storage.set('isCollapsed', state.isCollapsed)
    }
  },
  actions: {}
}
