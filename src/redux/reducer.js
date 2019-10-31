const INITIALSTATE = {
  counter: 0 ,
  appName: 'app'
}

export const reducer = (state = INITIALSTATE, actions) => {
  switch(actions.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      }
    
    case 'DECREMENT': 
      return {
        ...state,
        counter: state.counter - 1
      }

    case 'CHANGENAME':
      return {
        ...state,
        appName: actions.name
      }

    default:
      return state;

  }
}

