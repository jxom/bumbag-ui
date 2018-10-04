import getBlockquoteTheme from '../Blockquote/theme';
import getButtonTheme from '../Button/theme';
import getCodeTheme from '../Code/theme';
import getHeadingTheme from '../Heading/theme';
import getLinkTheme from '../Link/theme';
import getParagraphTheme from '../Paragraph/theme';

// This util converts the original abstracted config into a Reakit happy config...
export default (theme: ThemeConfig) => ({
  Blockquote: getBlockquoteTheme(theme.blockquote),
  Button: getButtonTheme(theme.button),
  Code: getCodeTheme(theme.code),
  Heading: getHeadingTheme(theme.heading),
  Link: getLinkTheme(theme.link),
  Paragraph: getParagraphTheme(theme.paragraph),

  ...theme
});
