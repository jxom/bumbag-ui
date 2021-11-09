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
  tintColorReference: _tintColorReference,
  shadeColorReference: _shadeColorReference,
  color,
  colorMode = 'default',
  paletteKey,
  paletteOverrides,
}: {
  backgroundColor?: string;
  tintColorReference?: string;
  shadeColorReference?: string;
  color: string;
  colorMode?: string;
  paletteKey: string;
  paletteOverrides?: ({ color }: { color: string }) => {};
}) => {
  let tintColorReference = _tintColorReference;
  let shadeColorReference = _shadeColorReference;

  if (backgroundColor) {
    if (colorMode === 'default') {
      tintColorReference = backgroundColor;
    }
    if (colorMode === 'dark') {
      shadeColorReference = backgroundColor;
    }
  }

  return {
    [`${paletteKey}100`]: tint(0.7, color)({ referenceColor: tintColorReference }),
    [`${paletteKey}200`]: tint(0.5, color)({ referenceColor: tintColorReference }),
    [`${paletteKey}300`]: tint(0.3, color)({ referenceColor: tintColorReference }),
    [`${paletteKey}400`]: tint(0.1, color)({ referenceColor: tintColorReference }),
    [paletteKey]: color,
    [`${paletteKey}500`]: color,
    [`${paletteKey}600`]: shade(0.1, color)({ referenceColor: shadeColorReference }),
    [`${paletteKey}700`]: shade(0.3, color)({ referenceColor: shadeColorReference }),
    [`${paletteKey}800`]: shade(0.5, color)({ referenceColor: shadeColorReference }),
    [`${paletteKey}900`]: shade(0.7, color)({ referenceColor: shadeColorReference }),
    [`${paletteKey}Shade`]: shade(0.8, color)({ referenceColor: shadeColorReference }),
    [`${paletteKey}Tint`]: tint(0.9, color)({ referenceColor: tintColorReference }),
    [`${paletteKey}Inverted`]: readableColor(color)(),
    [`${paletteKey}ShadeInverted`]: tint(0.7, color)({ referenceColor: tintColorReference }),
    [`${paletteKey}TintInverted`]: shade(0.5, color)({ referenceColor: shadeColorReference }),
    ...(paletteOverrides ? paletteOverrides({ color }) : {}),
  };
};
