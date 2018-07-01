import { connect } from 'react-redux'
import Results from '../components/Results'

// import { baseIMGURL } from '../../../config'

const mapStateToProps = (state) => ({
    searchResult: state.search.searchResult//,
    // baseIMGURL
})

export default connect(mapStateToProps, null)(Results)
