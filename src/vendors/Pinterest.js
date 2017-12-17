import store from 'rdx/store'
import { setLoggingIn, setAuthUser } from 'rdx/actions'

const PDK = window.PDK

const CONFIG = {
  ONE_WEEK: 1000 * 60 * 60 * 24 * 7,
  POPUP_OPTIONS:
    'status=no,resizable=yes,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=700,height=500,left=0,top=0',
  PIN_APP: '4939923279528871672',
  PIN_FIELDS: 'id,name,image[small]',
  PIN_SCOPE: 'read_public',
}

// Initialize once with app id
PDK.init({ appId: CONFIG.PIN_APP, cookie: true })

function userInfo() {
  PDK.me(res => {
    store.dispatch(setAuthUser(res.data))
  })
}

/*
 *  Wrapper for all Pinterest SDK actions
 */
const Pinterest = {
  /*
     *  Use the SDK to login to Pinterest
     *  @param {Function} callback - function fired on completion
     */
  login: function() {
    store.dispatch(setLoggingIn(true))
    PDK.login({ scope: CONFIG.PIN_SCOPE }, () => {
      userInfo()
    })
  },
  /*
     *  Use the SDK to logout of Pinterest
     */
  logout: function() {
    PDK.logout()
    store.dispatch(setAuthUser(null))
  },
  /*
     *  Use DK to determine auth state of user
     *  @returns {Boolean}
     */
  loggedIn: function() {
    return !!PDK.getSession()
  },
  /*
     *  Use SDK to create a new Pin
     *  @param {Object}   data     - {board, note, link, image_url}
     *  @param {Function} callback - function fired on completion
     */
  createPin: function(data, callback) {
    PDK.request('/pins/', 'POST', data, callback)
  },
  /*
     *  Use SDK to request current user
     *  @param {Function} callback - function fired on completion
     */
  userInfo,
  /*
    *  Use SDK to request current users boards
    *  @param {Function} callback - function fired on completion
    */
  myBoards: function(callback) {
    PDK.me('boards', callback)
  },
  /*
    *  Use SDK to request current users boards
    *  @param {Function} callback - function fired on completion
    */
  myBoards: function(callback) {
    PDK.me('pins', callback)
  },
}

export default Pinterest

// https://developers.pinterest.com/docs/sdks/js/?
