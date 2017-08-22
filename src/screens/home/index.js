import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import { getDeputies, getMoreDeputies } from '../../actions';


class Home extends Component {
  static navigationOptions = {
    title: 'Deputados',
  };

  componentWillMount() {
    this.props.getDeputies();
  }

  renderFooter = () => (
    // TODO: Create a loading state to show or not the load component
    <View style={{
      paddingVertical: 20,
      borderTopWidth: 1,
      borderTopColor: '#DDDDDD',
    }}>
      <ActivityIndicator animating size="large" />
    </View>
  );

  handleLoadMore = () => {
    const { pagination, getMoreDeputies } = this.props;
    if (pagination.next) {
      getMoreDeputies(pagination.next);
    }
  }

  render() {
    const { listOfDeputies } = this.props;
    return (
      <List>
        <FlatList
          data={listOfDeputies}
          keyExtractor={(item) => item.id}
          ListFooterComponent={this.renderFooter}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0.5}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              avatar={{ uri: item.urlFoto.replace('http', 'https')}}
              title={item.nome}
              subtitle={item.siglaPartido}
            />
          )}
        />
      </List>
    );
  }
}

const mapStateToProps = ({ deputies: { listOfDeputies, pagination } }) => ({
  listOfDeputies,
  pagination,
});


export default connect(mapStateToProps, { getDeputies, getMoreDeputies })(Home);
