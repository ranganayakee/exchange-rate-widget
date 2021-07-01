import { connect } from 'react-redux';
import { RootState } from '../../reducers/root.reducer';
import LoadingIndicatorComponent, {
    LoadingIndicatorProps
} from './loading-indicator-component';

const mapStateToProps = (state: RootState): LoadingIndicatorProps => ({
    loading: state.app.isBusy
});

export default connect(mapStateToProps)(LoadingIndicatorComponent);
