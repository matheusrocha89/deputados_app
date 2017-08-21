import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';


class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { listOfDeputies } = this.props;
    return (
      <View>
        {listOfDeputies.map(deputy => <Text key={deputy}>{deputy}</Text>)}
        <Text>Hello</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ deputies: { listOfDeputies} }) => ({
  listOfDeputies
});


export default connect(mapStateToProps)(Home);
