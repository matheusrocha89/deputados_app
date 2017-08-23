import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button } from 'react-native-elements';

import { getDeputyDetails } from '../actions';


const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 100,
  },
  bodyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  politicalParty: {
    fontSize: 16,
  },
  situation: {
    padding: 10,
  },
});


class DeputyDetailsScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    getDeputyDetails: PropTypes.func.isRequired,
  };
  static defaultProps = {
    navigation: {},
  };

  componentDidMount() {
    const { id } = this.props.navigation.state.params.deputy;
    this.props.getDeputyDetails(id);
  }

  render() {
    const { deputy } = this.props.navigation.state.params;
    const { goBack } = this.props.navigation;
    return (
      <View>
        <View>
          <View style={styles.headerContainer}>
            <View style={{ flex: 1 }}>
              <Button
                raised
                icon={{ name: 'arrow-back' }}
                title="Voltar"
                onPress={() => goBack()}
                style={{ margin: 5 }}
              />
            </View>
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <Avatar
            xlarge
            rounded
            source={{ uri: deputy.urlFoto.replace('http', 'https') }}
            activeOpacity={0.7}
          />
          <Text style={styles.name}>{deputy.nome}</Text>
          <Text style={styles.politicalParty}>{`${deputy.siglaPartido}-${deputy.siglaUf}`}</Text>
          <Text style={styles.situation}>Situação: Exercício</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ deputies: { currentDeputy, loading } }) => ({
  currentDeputy,
  loading,
});


export default connect(mapStateToProps, { getDeputyDetails })(DeputyDetailsScreen);
