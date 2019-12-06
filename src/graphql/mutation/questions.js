import gql from "graphql-tag";

export const addQuestionsM = gql`
    mutation addQuestions(
        $question1: Float!,
        $question2: Float!,
        $question3: Float!,
        $question4: Float!,
        $question5: Float!,
        $question6: Float!,
        $question7: Float!,
        $total: Float!,
        $trees: Float!,
        $user: ID!
    ){
        addQuestions(
            question1: $question1,
            question2: $question2,
            question3: $question3,
            question4: $question4,
            question5: $question5,
            question6: $question6,
            question7: $question7,
            total: $total,
            trees: $trees,
            user: $user,
        ) {
            _id,
            question1
        }
    }
`;