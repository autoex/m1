import {createStore} from "redux";





function playList(state = [], action) {
    if(action.type === 'ADD_TRACK') {
       return [
           ...state,
            action.trackname
        ]
    }

    return state;
}


let store = createStore(playList);






store.dispatch({type: 'ADD_TRACK', trackname: 'Never giveup'})
store.dispatch({type: 'ADD_TRACK', trackname: 'Never giveup 2'})
store.dispatch({type: 'ADD_TRACK', trackname: 'Never giveup 3'})


store.subscribe(() => console.log('subscribe: ', store.getState())
);

window.state = store.getState();




export default store;