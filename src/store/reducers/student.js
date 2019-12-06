const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false
};

export default function student(state = INITIAL_STATE, action){
    switch (action.type){
        case "ADD_STUDENT":
            return { ...state, loading: true }
        case "SUCCESS_ADD_STUDENT":
            return { data: action.payload.data, loading: false, error: false }
        case "FAILURE_ADD_STUDENT":
            return { data: [], loading: false, error: true }
        default:
            return state
    }
}