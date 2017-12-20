import _ from 'lodash'
import store from 'rdx/store'
import { setAuthUser, clearBoards, appendBoards, clearPins, appendPins } from 'rdx/actions'

const PDK = window.PDK

const CONFIG = {
  ONE_WEEK: 1000 * 60 * 60 * 24 * 7,
  POPUP_OPTIONS:
    'status=no,resizable=yes,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=700,height=500,left=0,top=0',
  PIN_APP: '4939923279528871672',
  USER_FIELDS: 'id,username,first_name,bio,counts,image',
  BOARD_FIELDS: 'url,id,name,image[small],counts',
  PIN_FIELDS: 'id,url,link,board,metadata,image[small]',
  PIN_SCOPE: 'read_public',
}

// Initialize once with app id
PDK.init({ appId: CONFIG.PIN_APP, cookie: true })

function ingestBoards() {
  store.dispatch(clearBoards())
  PDK.me('boards', { fields: CONFIG.BOARD_FIELDS }, res => {
    if (_.isNil(res)) {
      // TODO:
    } else if (!_.isNil(res.error)) {
      console.error(res.error)
    } else {
      store.dispatch(appendBoards(res.data))
      if (res.hasNext) {
        res.next()
      }
    }
  })
}

function ingestPins() {
  PDK.me('pins', { fields: CONFIG.PIN_FIELDS }, res => {
    if (_.isNil(res)) {
      // TODO:
    } else if (!_.isNil(res.error)) {
      console.error(res.error)
    } else {
      store.dispatch(appendPins(res.data))
      if (res.hasNext) {
        res.next()
      }
    }
  })
}

function ingest() {
  // ingestBoards()
  ingestPins()
}

function userInfo() {
  PDK.request('/me', { fields: CONFIG.USER_FIELDS }, res => {
    store.dispatch(setAuthUser(res.data))
    ingest()
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
  myPins: function(callback) {
    PDK.me('pins', callback)
  },
  /*
    *  Pull all of the info down from the server, including the authed user
    *  @param {Function} callback - function fired on completion
    */
  ingest: userInfo,
}

export default Pinterest

// https://developers.pinterest.com/docs/sdks/js/?
