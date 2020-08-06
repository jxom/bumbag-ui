import React from 'react'
import { Provider as BumbagProvider } from 'bumbag'

export const wrapRootElement = ({ element, ...props }) => <BumbagProvider>{element}</BumbagProvider>
