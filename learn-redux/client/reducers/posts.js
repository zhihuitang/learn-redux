
/**
 * a reducer takes in 2 things:
 * 1. the action( info about what happened)
 * 2. copy of the current state
 */

function posts(state = [], action) {
    //console.log('will posts ===>');
    //console.log(state, action);

    switch(action.type) {
        case 'INCREMENT_LIKES':
            console.log('Incrementing likes.....');
            const i = action.index;
            return [
                ...state.slice(0,i),
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1),
            ]
        default:
            return state;
    }
}

export default posts;