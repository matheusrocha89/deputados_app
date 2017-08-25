import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import isEmpty from 'lodash/isEmpty';

import { getDeputyDetails } from '../actions';
import DeputyPersonalDataCard from '../components/deputy-personal-data-card';
import DeputyOfficeDataCard from '../components/deputy-office-data-card';
import DeputySocialDataCard from '../components/deputy-social-data-card';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
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

  renderOfficeData() {
    const { loading, currentDeputy } = this.props;
    if (loading || isEmpty(currentDeputy)) return null;

    return <DeputyOfficeDataCard office={currentDeputy.ultimoStatus.gabinete} />;
  }

  render() {
    const { deputy } = this.props.navigation.state.params;
    const { currentDeputy } = this.props;
    return (
      <ScrollView style={styles.container}>
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
          {this.renderOfficeData()}
          <DeputySocialDataCard deputy={currentDeputy} />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ deputies: { currentDeputy, loading } }) => ({
  currentDeputy,
  loading,
});


export default connect(mapStateToProps, { getDeputyDetails })(DeputyDetailsScreen);
