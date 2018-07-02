import { connect } from 'react-redux'
import Results from '../components/Results'

const mapStateToProps = (state) => ({
    searchResult: state.search.searchResult
})

export default connect(mapStateToProps, null)(Results)
