import { combineReducers } from 'redux'

import AvisoReducer from '../store/reducers/avisoReducer'

const rootReducer = combineReducers({
    aviso: AvisoReducer
})

export default rootReducer;