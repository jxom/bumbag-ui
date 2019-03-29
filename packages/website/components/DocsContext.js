import React from 'react';
import useMedia from 'use-media';
import qs from 'query-string';
import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';

import docsTheme from '../theme';

const DocsContext = React.createContext();

export function Provider(props) {
  const { children, routes = [], getRoute } = props;
  const route = getRoute(props);

  const [isMenuOpen, setMenuOpen] = React.useState();

  const query = typeof window !== 'undefined' ? qs.parse(window.location.search) : {};
  const defaultThemeName = query.theme || 'default';
  const [theme, setTheme] = React.useState();
  const [themeName, setThemeName] = React.useState(defaultThemeName);
  async function changeTheme(themeName) {
    const module = await import(`fannypack/themes/${themeName}/index`);
    const overrideTheme = module.default;
    const newUrl = `${window.location.origin}${window.location.pathname}?theme=${themeName}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
    setThemeName(themeName);
    setTheme(merge(cloneDeep(docsTheme), overrideTheme));
  }
  React.useEffect(() => {
    changeTheme(defaultThemeName);
  }, []);

  const isMobile = useMedia({ maxWidth: 1024 });
  const context = {
    layout: {
      isMenuOpen,
      toggleMenu: () => setMenuOpen(!isMenuOpen),
      openMenu: () => setMenuOpen(true),
      closeMenu: () => setMenuOpen(false),
      isMobile,
      themeName,
      theme,
      changeTheme
    },
    routes,
    route
  };

  if (!theme) return null;
  return <DocsContext.Provider value={context}>{children}</DocsContext.Provider>;
}

const getNextRoute = props => props.routes.find(route => route.path === props.router.pathname) || {};
Provider.defaultProps = {
  getRoute: getNextRoute
};

export function useDocsContext() {
  return React.useContext(DocsContext);
}

export default {
  Provider,
  useDocsContext
};
