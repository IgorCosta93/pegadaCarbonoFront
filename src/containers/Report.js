import { connect } from 'react-redux';
import ReportWrapper from "../components/general/ReportWrapper";
import { graphql } from 'react-apollo';
import { getStudents } from "../graphql/query/students";

const mapStateToProps = state => {
    return {
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(graphql(getStudents)(ReportWrapper));