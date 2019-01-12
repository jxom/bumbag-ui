import { lighten, tint, readableColor, shade } from 'polished';
// @ts-ignore
import _get from 'lodash/get';

import { ThemeConfig } from '../types';

export const generateTextVariants = (textColor: string) => ({
  text100: lighten(0.2, textColor),
  text200: lighten(0.15, textColor),
  text300: lighten(0.1, textColor),
  text400: lighten(0.05, textColor),
  text: textColor,
  textTint: tint(0.8, textColor),
  textInverted: readableColor(textColor),
  textTintInverted: shade(0.3, textColor)
});

export const generateColorVariants = ({
  color,
  paletteKey,
  paletteOverrides
}: {
  color: string;
  paletteKey: string;
  paletteOverrides?: ({ color }: { color: string }) => {};
}) => {
  return {
    [`${paletteKey}100`]: tint(0.7, color),
    [`${paletteKey}200`]: tint(0.5, color),
    [`${paletteKey}300`]: tint(0.3, color),
    [`${paletteKey}400`]: tint(0.1, color),
    [paletteKey]: color,
    [`${paletteKey}500`]: color,
    [`${paletteKey}600`]: shade(0.1, color),
    [`${paletteKey}700`]: shade(0.3, color),
    [`${paletteKey}800`]: shade(0.5, color),
    [`${paletteKey}900`]: shade(0.7, color),
    [`${paletteKey}Tint`]: tint(0.7, color),
    [`${paletteKey}Inverted`]: readableColor(color),
    [`${paletteKey}TintInverted`]: shade(0.5, color),
    ...(paletteOverrides ? paletteOverrides({ color }) : {})
  };
};
