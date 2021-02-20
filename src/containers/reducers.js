import {combineReducers} from 'redux';




import {reducer as homepageData} from './homepage/homepage.ducks';



const allReducers = {
    homepageData

}


const rootReducer = combineReducers(allReducers);



export default rootReducer;