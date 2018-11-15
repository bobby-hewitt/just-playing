export const setMouseHandler = (payload) => {
  console.log('ere', payload)
  return dispatch => {
    dispatch({
      type: 'SET_MOUSE_HANDLER',
      payload
    })
  }
}
