// @ts-ignore
import { lighten, tint, readableColor, shade } from './colors';

export const generateTextVariants = (textColor: string) => ({
  text100: lighten(0.2, textColor)(),
  text200: lighten(0.15, textColor)(),
  text300: lighten(0.1, textColor)(),
  text400: lighten(0.05, textColor)(),
  text: textColor,
  textTint: tint(0.8, textColor)(),
  textInverted: readableColor(textColor)(),
  textTintInverted: shade(0.3, textColor)(),
});

export const generateColorVariants = ({
  backgroundColor,
  color,
  colorMode = 'default',
  paletteKey,
  paletteOverrides,
}: {
  backgroundColor: string;
  color: string;
  colorMode?: string;
  paletteKey: string;
  paletteOverrides?: ({ color }: { color: string }) => {};
}) => {
  return {
    [`${paletteKey}100`]: tint(0.7, color)({ backgroundColor, colorMode }),
    [`${paletteKey}200`]: tint(0.5, color)({ backgroundColor, colorMode }),
    [`${paletteKey}300`]: tint(0.3, color)({ backgroundColor, colorMode }),
    [`${paletteKey}400`]: tint(0.1, color)({ backgroundColor, colorMode }),
    [paletteKey]: color,
    [`${paletteKey}500`]: color,
    [`${paletteKey}600`]: shade(0.1, color)({ backgroundColor, colorMode }),
    [`${paletteKey}700`]: shade(0.3, color)({ backgroundColor, colorMode }),
    [`${paletteKey}800`]: shade(0.5, color)({ backgroundColor, colorMode }),
    [`${paletteKey}900`]: shade(0.7, color)({ backgroundColor, colorMode }),
    [`${paletteKey}Shade`]: shade(0.8, color)({ backgroundColor, colorMode }),
    [`${paletteKey}Tint`]: tint(0.9, color)({ backgroundColor, colorMode }),
    [`${paletteKey}Inverted`]: readableColor(color)(),
    [`${paletteKey}ShadeInverted`]: tint(0.7, color)({ backgroundColor, colorMode }),
    [`${paletteKey}TintInverted`]: shade(0.5, color)({ backgroundColor, colorMode }),
    ...(paletteOverrides ? paletteOverrides({ color }) : {}),
  };
};
