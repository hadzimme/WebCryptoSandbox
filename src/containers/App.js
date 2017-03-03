import {
  connect,
} from 'react-redux'
import App from '../components/App'
import {
  generateKey,
} from '../actions'

const mapStateToProps = state => {
  const { publicKey } = state
  return { publicKey }
}

const mapDispatchToProps = dispatch => {
  return {
    generateKey: () => {
      dispatch(generateKey())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
