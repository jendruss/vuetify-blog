// https://vuex.vuejs.org/en/state.html

export default {
  leadingColor: "#dd7600",
  drawer: false,
  postDialog: false,
  activePost: null,
  status: {
    loading: false,
    success: false,
    error: false
  },
  shareLinks: [],
  posts: [],
  comments: [],
  postComments: [],
  settings: {},
  socialSettings: {}
}
