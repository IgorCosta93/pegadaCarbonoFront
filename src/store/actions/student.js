export function ADD_STUDENT(body = {}) {
    return {
        type: "ADD_STUDENT",
        body
    };
};

export function UPDATE_STUDENT(body = {}){
    return {
        type: "UPDATE_STUDENT",
        body
    }
}

export function REMOVE_STUDENT(body = {}){
    return {
        type: "REMOVE_STUDENT",
        body
    }
}