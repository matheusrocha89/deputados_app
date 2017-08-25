import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Linking, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { isEmpty, compact } from 'lodash';

const styles = StyleSheet.create({
  links: {
    flex: 8,
    color: '#017BB6',
  },
  socialNetwork: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  socialIcon: {
    flex: 1,
  },
});

class DeputySocialDataCard extends Component {
  static propTypes = {
    deputy: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  mapSocialNetworks() {
    const { deputy } = this.props;

    const socialNetworks = deputy.redeSocial.map((url) => {
      let socialNetwork = null;
      if (url.search('facebook') !== -1) {
        socialNetwork = (
          <View style={styles.socialNetwork} key="facebook">
            <Icon containerStyle={styles.socialIcon} color="#3B5898" type="font-awesome" name="facebook" />
            <Text
              style={styles.links}
              onPress={() => Linking.openURL(url)}
            >
              {url}
            </Text>
          </View>
        );
      } else if (url.search('twitter') !== -1) {
        socialNetwork = (
          <View style={styles.socialNetwork} key="twitter">
            <Icon containerStyle={styles.socialIcon} color="#1DA1F2" type="font-awesome" name="twitter" />
            <Text
              style={styles.links}
              onPress={() => Linking.openURL(url)}
            >
              {url}
            </Text>
          </View>
        );
      } else if (url.search('youtube') !== -1) {
        socialNetwork = (
          <View style={styles.socialNetwork} key="youtube">
            <Icon containerStyle={styles.socialIcon} color="#E62217" type="font-awesome" name="youtube-play" />
            <Text
              style={styles.links}
              onPress={() => Linking.openURL(url)}
            >
              {url}
            </Text>
          </View>
        );
      }

      return socialNetwork;
    });

    return compact(socialNetworks);
  }

  render() {
    const { deputy } = this.props;
    if (
      isEmpty(deputy) ||
      (!deputy.urlWebsite && deputy.redeSocial.length === 0)
    ) {
      return null;
    }

    const socialNetworks = this.mapSocialNetworks();
    return (
      <Card title="Redes Sociais">
        {deputy.urlWebsite ? (
          <Text>Website: {deputy.urlWebsite}</Text>
        ) : null}
        {socialNetworks}
      </Card>
    );
  }
}


export default DeputySocialDataCard;
