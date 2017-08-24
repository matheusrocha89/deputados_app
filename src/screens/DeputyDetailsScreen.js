import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Avatar } from 'react-native-elements';

import { getDeputyDetails } from '../actions';
import DeputyPersonalDataCard from '../components/deputy-personal-data-card';


const styles = StyleSheet.create({
  bodyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  name: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  politicalParty: {
    fontSize: 16,
  },
  situation: {
    padding: 10,
  },
  loadingStyle: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#DDDDDD',
  },
});


class DeputyDetailsScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    currentDeputy: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    getDeputyDetails: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  };
  static defaultProps = {
    navigation: {},
  };

  componentWillMount() {
    const { id } = this.props.navigation.state.params.deputy;
    this.props.getDeputyDetails(id);
  }

  renderPersonalData() {
    const { loading, currentDeputy } = this.props;
    if (loading) {
      return (
        <View style={styles.loadingStyle}>
          <ActivityIndicator animating size="large" />
        </View>
      );
    }

    return <DeputyPersonalDataCard deputy={currentDeputy} />;
  }

  render() {
    const { deputy } = this.props.navigation.state.params;
    return (
      <View>
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
        <View>
          {this.renderPersonalData()}
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
