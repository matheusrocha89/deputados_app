import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';
import isEmpty from 'lodash/isEmpty';


const DeputyOfficeDataCard = ({ office }) => {
  if (isEmpty(office)) return null;

  return (
    <Card title="Dados do Gabinete">
      <Text>Nome: {office.nome}</Text>
      <Text>Prédio: {office.predio}</Text>
      <Text>Sala: {office.sala}</Text>
      <Text>Andar: {office.andar}</Text>
      <Text>Telefone: (61) {office.telefone}</Text>
      <Text>Email: {office.email}</Text>
    </Card>
  );
};

DeputyOfficeDataCard.propTypes = {
  office: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};


export default DeputyOfficeDataCard;
