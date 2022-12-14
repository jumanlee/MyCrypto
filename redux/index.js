
import {combineReducers} from 'redux'
import {walletReducer, transacReducer, portfolioReducer } from './reducer'
import {RESET} from './actionTypes'


const appReducer = combineReducers({
    wallet: walletReducer, 
    transac: transacReducer,
    portfolio: portfolioReducer,
})

const rootReducer = (state, action) => {
    if(action.type == RESET){
        console.log("reset");        
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
}

export default rootReducer;