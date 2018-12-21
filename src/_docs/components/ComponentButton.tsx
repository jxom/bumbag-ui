import * as React from 'react';
import { palette } from 'styled-tools';

import styled from '../../styled';
import Heading from '../../Heading';
import Pane from '../../Pane';

const Wrapper = styled(Pane)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  text-decoration: none;

  &:hover {
    background-color: ${palette('white700')};
  }
`;

const IconWrapper = styled(Pane)`
  border: 1px solid ${palette('primary300')};
  align-items: center;
  justify-content: center;
`;

type Props = {
  href: string;
  name: string;
};

class ComponentButton extends React.PureComponent<Props> {
  state = { Icon: null };

  componentDidMount = () => {
    const { name } = this.props;
    import(`./ComponentIcons/${name}`)
      .then(component => this.setState({ Icon: component.default }))
      .catch(() => {});
  };

  render = () => {
    const { name, ...props } = this.props;
    const { Icon } = this.state;
    return (
      <Wrapper use="a" {...props}>
        <IconWrapper backgroundColor="primaryTint" height={100} width={180}>
          {Icon && (
            // @ts-ignore
            <Icon />
          )}
        </IconWrapper>
        <Heading use="h6" marginTop="minor-2" isSubHeading>
          {name}
        </Heading>
      </Wrapper>
    );
  };
}

export default ComponentButton;
