import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';
import isEmpty from 'lodash/isEmpty';
import moment from 'moment';


const DeputyPersonalDataCard = ({ deputy }) => {
  if (isEmpty(deputy)) return null;

  const { ultimoStatus } = deputy;
  const birthDate = moment(deputy.dataNascimento).format('DD/MM/YYYY');
  return (
    <Card title="Dados Pessoais">
      <Text>Nome Civil: {deputy.nomeCivil}</Text>
      <Text>Nome Eleitoral: {ultimoStatus.nomeEleitoral}</Text>
      <Text>Sexo: {deputy.sexo === 'M' ? 'Masculino' : 'Feminino'}</Text>
      {deputy.cpf ? (
        <Text> CPF: {deputy.cpf}</Text>
      ) : null}
      <Text>Data Nascimento: {birthDate}</Text>
      <Text>Escolaridade: {deputy.escolaridade ? deputy.escolaridade : 'Não informada'}</Text>
    </Card>
  );
};

DeputyPersonalDataCard.propTypes = {
  deputy: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};


export default DeputyPersonalDataCard;
