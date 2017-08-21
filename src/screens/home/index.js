import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import { getDeputies } from '../../actions';


class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  componentWillMount() {
    this.props.getDeputies();
  }

  render() {
    const { listOfDeputies } = this.props;
    return (
      <View>
        {listOfDeputies.map(deputy => <Text key={deputy.id}>{deputy.nome} - {deputy.siglaPartido}</Text>)}
      </View>
    );
  }
}

const mapStateToProps = ({ deputies: { listOfDeputies} }) => ({
  listOfDeputies
});


export default connect(mapStateToProps, { getDeputies })(Home);
