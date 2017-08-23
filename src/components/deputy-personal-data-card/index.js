import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';
import isEmpty from 'lodash/isEmpty';


const DeputyPersonalDataCard = ({ deputy }) => {
  if (isEmpty(deputy)) return null;

  const { ultimoStatus } = deputy;
  return (
    <Card title="Dados Pessoais">
      <Text>Nome Civil: {deputy.nomeCivil}</Text>
      <Text>Nome Eleitoral: {ultimoStatus.nomeEleitoral}</Text>
      <Text>Sexo: {deputy.sexo === 'M' ? 'Masculino' : 'Feminino'}</Text>
      {deputy.cpf ? (
        <Text> CPF: {deputy.cpf}</Text>
      ) : null}
      <Text>Data Nascimento: {deputy.dataNascimento}</Text>
      {deputy.escolaridade ? (
        <Text>Escolaridade: {deputy.escolaridade}</Text>
      ) : null}
    </Card>
  );
};

DeputyPersonalDataCard.propTypes = {
  deputy: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};


export default DeputyPersonalDataCard;
