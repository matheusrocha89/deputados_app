import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Avatar, Button } from 'react-native-elements';

export default class DeputyDetailsScreen extends Component {
  
  constructor(props){
    super(props);
  }

  render() {
    const { deputy } = this.props.navigation.state.params;
    const { goBack } = this.props.navigation;
    return (
      <View>
        <View>
          <View style={styles.headerContainer}>
            <View style={{flex: 1}}>
              <Button
                raised
                icon={{name: 'arrow-back'}}
                title='Voltar' 
                onPress={() => goBack()}
                style={{margin:5}}
              />
            </View>
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <Avatar
            xlarge
            rounded
            source={{uri: deputy.urlFoto.replace('http', 'https')}}
            activeOpacity={0.7}
          />
          <Text style={styles.name}>{deputy.nome}</Text>
          <Text style={styles.politicalParty}>{deputy.siglaPartido+'-'+deputy.siglaUf}</Text>
          <Text style={styles.situation}>Situação: Exercício</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height:100,
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