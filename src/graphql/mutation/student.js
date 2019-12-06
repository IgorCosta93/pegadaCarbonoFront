import gql from "graphql-tag";

export const addStudentM = gql`
    mutation addStudent(
        $name: String!,
        $email: String!,
        $ra: String!
    ){
        addStudent(
            name: $name,
            email: $email,
            ra: $ra
        ) {
            _id,
            name
        }
    }
`;