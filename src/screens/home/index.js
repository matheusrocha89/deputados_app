import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import { getDeputies } from '../../actions';


class Home extends Component {
  static navigationOptions = {
    title: 'Deputados',
  };

  componentWillMount() {
    this.props.getDeputies();
  }

  render() {
    const { listOfDeputies } = this.props;
    return (
      <ScrollView>
        <List>
          {listOfDeputies.map((deputy) => (
            <ListItem
              roundAvatar
              avatar={{uri: deputy.urlFoto.replace('http', 'https')}}
              key={deputy.id}
              title={deputy.nome}
              subtitle={deputy.siglaPartido}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ deputies: { listOfDeputies} }) => ({
  listOfDeputies
});


export default connect(mapStateToProps, { getDeputies })(Home);
