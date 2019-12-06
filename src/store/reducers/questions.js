const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false
};

export default function questions(state = INITIAL_STATE, action){
    switch (action.type){
        case "ADD_QUESTIONS":
            return { ...state, loading: true }
        case "SUCCESS_ADD_QUESTIONS":
            return { data: action.payload.data, loading: false, error: false }
        case "FAILURE_ADD_QUESTIONS":
            return { data: [], loading: false, error: true }
        default:
            return state
    }
}