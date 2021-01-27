import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NativeRouter, Link, Route } from 'react-router-native';
import { Box, Text, Provider } from 'bumbag-native';

import Home from './routes/Home';
import BoxPage from './routes/components/Box';
import IconPage from './routes/components/Icon';
import ImagePage from './routes/components/Image';
import TextPage from './routes/components/Text';

export default function App() {
  return (
    <Provider>
      <NativeRouter>
        <Box.Safe>
          <Box.Scroll>
            <Box padding="16px">
              <Link to="/" component={TouchableOpacity}>
                <Text fontSize="400" fontWeight="600" marginBottom="16px">
                  Bumbag Native Playground
                </Text>
              </Link>
              <Route exact path="/" component={Home} />
              <Route exact path="/components/box" component={BoxPage} />
              <Route exact path="/components/icon" component={IconPage} />
              <Route exact path="/components/image" component={ImagePage} />
              <Route exact path="/components/text" component={TextPage} />
            </Box>
          </Box.Scroll>
        </Box.Safe>
      </NativeRouter>
    </Provider>
  );
}
