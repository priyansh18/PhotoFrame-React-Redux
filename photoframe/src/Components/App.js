import Main from './Main';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { removePhoto } from './../Redux/actions';


function mapStateToProps(state) {
  return {
    allPhotos: state,
  };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({removePhoto},dispatch)
}
const App = connect(mapStateToProps,mapDispatchToProps)(Main)

export default App