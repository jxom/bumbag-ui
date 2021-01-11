import React from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { NativeRouter, Link, Route } from 'react-router-native';
import { Box, Text, Provider, styled } from 'bumbag-native';

import Home from './routes/Home';
import BoxPage from './routes/components/Box';

export default function App() {
  return (
    <Provider>
      <NativeRouter>
        <Box.Safe>
          <ScrollView>
            <Box padding="16px">
              <Link to="/" component={TouchableOpacity}>
                <Text fontSize="20px" fontWeight="600" marginBottom="16px">
                  Bumbag Native Playground
                </Text>
              </Link>
              <Route exact path="/" component={Home} />
              <Route exact path="/components/box" component={BoxPage} />
            </Box>
          </ScrollView>
        </Box.Safe>
      </NativeRouter>
    </Provider>
  );
}
