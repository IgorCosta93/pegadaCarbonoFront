import { connect } from 'react-redux';
import HomeWrapper from "../components/general/HomeWrapper";
import { ADD_STUDENT } from "../store/actions/student";

const mapStateToProps = state => {
    return {
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        ADD_STUDENT: body => dispatch(ADD_STUDENT(body)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeWrapper);