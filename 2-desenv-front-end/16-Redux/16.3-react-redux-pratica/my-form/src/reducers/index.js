const INITIAL_STATE = {
  name:'',
  email:'', 
  cpf:'',
  cidade:'',
  estado:'',
  tipo:'',
}

function updateDateUser(state = INITIAL_STATE, action){
  switch(action.type) {
    case 'RENDER_DATA':
      return {...state, [action.element]: action.value }
    default:
      return state;
  }
}

export default updateDateUser;