import * as React from 'react';
import { Heading, Pane, styled, palette } from 'fannypack';

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
  display: flex;
  align-items: center;
  justify-content: center;
`;

class ComponentButton extends React.PureComponent {
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
