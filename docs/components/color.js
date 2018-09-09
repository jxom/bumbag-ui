import React from 'react';
import PropTypes from 'prop-types';
import { Base, Code, Flex, Paragraph } from 'reakit';
import { colors } from '../../src/theme';

const Color = ({ color, title }) => (
  <Flex alignItems="center" flexDirection="column" marginLeft="1rem" marginRight="1rem" width="150px">
    <Base backgroundColor={colors[color]} height="100px" width="100px" />
    <Paragraph fontWeight="600" marginTop="1rem">
      {title}
    </Paragraph>
    <Code>{colors[color]}</Code>
  </Flex>
);

Color.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Color;
