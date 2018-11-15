const initialState = {
  mouseHandler: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOUSE_HANDLER':
      return {
        ...state,
        mouseHandler: action.payload,
      }
   
    default:
      return state
  }
}
