import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import { selectPokemonItem } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const itemId = ownProps.match.params.itemId;
  return {
    item: selectPokemonItem(state, itemId)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);
