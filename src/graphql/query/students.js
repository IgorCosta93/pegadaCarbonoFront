import { gql } from 'apollo-boost';

export const getStudents = gql`
    query{
        students{
            name,
            ra,
            questions_info{
              total,
              trees
            }
        }
    }
`;