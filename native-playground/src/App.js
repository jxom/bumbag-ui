import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NativeRouter, Link, Route } from 'react-router-native';
import { Box, Heading, Provider } from 'bumbag-native';

import Home from './routes/Home';
import BoxPage from './routes/components/Box';
import ButtonPage from './routes/components/Button';
import CheckboxPage from './routes/components/Checkbox';
import CheckboxGroupPage from './routes/components/CheckboxGroup';
import FieldWrapperPage from './routes/components/FieldWrapper';
import HeadingPage from './routes/components/Heading';
import HidePage from './routes/components/Hide';
import IconPage from './routes/components/Icon';
import ImagePage from './routes/components/Image';
import InputPage from './routes/components/Input';
import ListPage from './routes/components/List';
import MenuPage from './routes/components/Menu';
import PickerPage from './routes/components/Picker';
import RadioPage from './routes/components/Radio';
import SetPage from './routes/components/Set';
import ShowPage from './routes/components/Show';
import SwitchPage from './routes/components/Switch';
import SwitchGroupPage from './routes/components/SwitchGroup';
import TextPage from './routes/components/Text';

export default function App() {
  return (
    <Provider>
      <NativeRouter>
        <Box.Safe>
          <Box.Scroll>
            <Box padding="16px">
              <Link to="/" component={TouchableOpacity}>
                <Heading marginBottom="16px">Bumbag Native Playground</Heading>
              </Link>
              <Route exact path="/" component={Home} />
              <Route exact path="/components/box" component={BoxPage} />
              <Route exact path="/components/button" component={ButtonPage} />
              <Route exact path="/components/checkbox" component={CheckboxPage} />
              <Route exact path="/components/checkbox-group" component={CheckboxGroupPage} />
              <Route exact path="/components/field-wrapper" component={FieldWrapperPage} />
              <Route exact path="/components/heading" component={HeadingPage} />
              <Route exact path="/components/hide" component={HidePage} />
              <Route exact path="/components/icon" component={IconPage} />
              <Route exact path="/components/image" component={ImagePage} />
              <Route exact path="/components/input" component={InputPage} />
              <Route exact path="/components/list" component={ListPage} />
              <Route exact path="/components/menu" component={MenuPage} />
              <Route exact path="/components/picker" component={PickerPage} />
              <Route exact path="/components/radio" component={RadioPage} />
              <Route exact path="/components/set" component={SetPage} />
              <Route exact path="/components/show" component={ShowPage} />
              <Route exact path="/components/switch" component={SwitchPage} />
              <Route exact path="/components/switch-group" component={SwitchGroupPage} />
              <Route exact path="/components/text" component={TextPage} />
            </Box>
          </Box.Scroll>
        </Box.Safe>
      </NativeRouter>
    </Provider>
  );
}
