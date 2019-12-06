import { connect } from 'react-redux';
import QuestionsWrapper from "../components/general/QuestionsWrapper";
import { ADD_QUESTIONS } from "../store/actions/questions";

const mapStateToProps = state => {
    return {
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        ADD_QUESTIONS: body => dispatch(ADD_QUESTIONS(body)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsWrapper);