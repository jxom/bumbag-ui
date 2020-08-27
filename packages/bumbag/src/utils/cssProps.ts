import { omit } from './omit';
import { pick } from './pick';

export function isCSSProp(prop) {
  return Object.keys(cssProps).includes(prop);
}

export function pickCSSProps(props) {
  return pick(props, ...Object.keys(cssProps));
}

export function omitCSSProps(props) {
  return omit(props, ...Object.keys(cssProps));
}

export const cssProps = {
  _hover: ':hover',
  _hoveractive: ':hover:active',
  _focus: ':focus',
  _visited: ':visited',
  _active: ':active',
  _disabled: ':disabled',
  _groupHover: '[role=group]:hover &',
  _groupActive: '[role=group]:active &',
  _groupFocus: '[role=group]:focus &',
  _groupVisited: '[role=group]:visited &',
  _groupDisabled: '[role=group]:disabled &',
  alignContent: 'align-content',
  alignSelf: 'align-self',
  alignItems: 'align-items',
  alignmentBaseline: 'alignment-baseline',
  all: 'all',
  animation: 'animation',
  animationDelay: 'animation-delay',
  animationDirection: 'animation-direction',
  animationDuration: 'animation-duration',
  animationFillMode: 'animation-fill-mode',
  animationIterationCount: 'animation-iteration-count',
  animationName: 'animation-name',
  animationPlayState: 'animation-play-state',
  animationTimingFunction: 'animation-timing-function',
  appearance: 'appearance',
  azimuth: 'azimuth',
  backfaceVisibility: 'backface-visibility',
  background: 'background',
  backgroundAttachment: 'background-attachment',
  backgroundBlendMode: 'background-blend-mode',
  backgroundClip: 'background-clip',
  backgroundColor: 'background-color',
  backgroundImage: 'background-image',
  backgroundImageTransform: 'background-image-transform',
  backgroundOrigin: 'background-origin',
  backgroundPosition: 'background-position',
  backgroundRepeat: 'background-repeat',
  backgroundSize: 'background-size',
  baselineShift: 'baseline-shift',
  blockSize: 'block-size',
  blockStep: 'block-step',
  blockStepAlign: 'block-step-align',
  blockStepInsert: 'block-step-insert',
  blockStepRound: 'block-step-round',
  blockStepSize: 'block-step-size',
  bookmarkLabel: 'bookmark-label',
  bookmarkLevel: 'bookmark-level',
  bookmarkState: 'bookmark-state',
  border: 'border',
  borderBlock: 'border-block',
  borderBlockColor: 'border-block-color',
  borderBlockEnd: 'border-block-end',
  borderBlockEndColor: 'border-block-end-color',
  borderBlockEndStyle: 'border-block-end-style',
  borderBlockEndWidth: 'border-block-end-width',
  borderBlockStart: 'border-block-start',
  borderBlockStartColor: 'border-block-start-color',
  borderBlockStartStyle: 'border-block-start-style',
  borderBlockStartWidth: 'border-block-start-width',
  borderBlockStyle: 'border-block-style',
  borderBlockWidth: 'border-block-width',
  borderBottom: 'border-bottom',
  borderBottomColor: 'border-bottom-color',
  borderBottomLeftRadius: 'border-bottom-left-radius',
  borderBottomRightRadius: 'border-bottom-right-radius',
  borderBottomStyle: 'border-bottom-style',
  borderBottomWidth: 'border-bottom-width',
  borderBoundary: 'border-boundary',
  borderCollapse: 'border-collapse',
  borderColor: 'border-color',
  borderImage: 'border-image',
  borderImageOutset: 'border-image-outset',
  borderImageRepeat: 'border-image-repeat',
  borderImageSlice: 'border-image-slice',
  borderImageSource: 'border-image-source',
  borderImageTransform: 'border-image-transform',
  borderImageWidth: 'border-image-width',
  borderInline: 'border-inline',
  borderInlineColor: 'border-inline-color',
  borderInlineEnd: 'border-inline-end',
  borderInlineEndColor: 'border-inline-end-color',
  borderInlineEndStyle: 'border-inline-end-style',
  borderInlineEndWidth: 'border-inline-end-width',
  borderInlineStart: 'border-inline-start',
  borderInlineStartColor: 'border-inline-start-color',
  borderInlineStartStyle: 'border-inline-start-style',
  borderInlineStartWidth: 'border-inline-start-width',
  borderInlineStyle: 'border-inline-style',
  borderInlineWidth: 'border-inline-width',
  borderLeft: 'border-left',
  borderLeftColor: 'border-left-color',
  borderLeftStyle: 'border-left-style',
  borderLeftWidth: 'border-left-width',
  borderRadius: 'border-radius',
  borderRight: 'border-right',
  borderRightColor: 'border-right-color',
  borderRightStyle: 'border-right-style',
  borderRightWidth: 'border-right-width',
  borderSpacing: 'border-spacing',
  borderStyle: 'border-style',
  borderTop: 'border-top',
  borderTopColor: 'border-top-color',
  borderTopLeftRadius: 'border-top-left-radius',
  borderTopRightRadius: 'border-top-right-radius',
  borderTopStyle: 'border-top-style',
  borderTopWidth: 'border-top-width',
  borderWidth: 'border-width',
  bottom: 'bottom',
  boxDecorationBreak: 'box-decoration-break',
  boxShadow: 'box-shadow',
  boxSizing: 'box-sizing',
  boxSnap: 'box-snap',
  breakAfter: 'break-after',
  breakBefore: 'break-before',
  breakInside: 'break-inside',
  captionSide: 'caption-side',
  caret: 'caret',
  caretAnimation: 'caret-animation',
  caretColor: 'caret-color',
  caretShape: 'caret-shape',
  chains: 'chains',
  clear: 'clear',
  clip: 'clip',
  clipPath: 'clip-path',
  clipRule: 'clip-rule',
  color: 'color',
  colorAdjust: 'color-adjust',
  colorInterpolationFilters: 'color-interpolation-filters',
  columnCount: 'column-count',
  columnFill: 'column-fill',
  columnGap: 'column-gap',
  columnRule: 'column-rule',
  columnRuleColor: 'column-rule-color',
  columnRuleStyle: 'column-rule-style',
  columnRuleWidth: 'column-rule-width',
  columnSpan: 'column-span',
  columnWidth: 'column-width',
  columns: 'columns',
  contain: 'contain',
  content: 'content',
  continue: 'continue',
  counterIncrement: 'counter-increment',
  counterReset: 'counter-reset',
  counterSet: 'counter-set',
  cue: 'cue',
  cueAfter: 'cue-after',
  cueBefore: 'cue-before',
  cursor: 'cursor',
  direction: 'direction',
  display: 'display',
  dominantBaseline: 'dominant-baseline',
  elevation: 'elevation',
  emptyCells: 'empty-cells',
  fill: 'fill',
  fillBreak: 'fill-break',
  fillColor: 'fill-color',
  fillImage: 'fill-image',
  fillOpacity: 'fill-opacity',
  fillOrigin: 'fill-origin',
  fillPosition: 'fill-position',
  fillRepeat: 'fill-repeat',
  fillRule: 'fill-rule',
  fillSize: 'fill-size',
  filter: 'filter',
  flex: 'flex',
  flexBasis: 'flex-basis',
  flexDirection: 'flex-direction',
  flexFlow: 'flex-flow',
  flexGrow: 'flex-grow',
  flexShrink: 'flex-shrink',
  flexWrap: 'flex-wrap',
  float: 'float',
  floatDefer: 'float-defer',
  floatOffset: 'float-offset',
  floatReference: 'float-reference',
  floodColor: 'flood-color',
  floodOpacity: 'flood-opacity',
  flow: 'flow',
  flowFrom: 'flow-from',
  flowInto: 'flow-into',
  font: 'font',
  fontFamily: 'font-family',
  fontFeatureSettings: 'font-feature-settings',
  fontKerning: 'font-kerning',
  fontLanguageOverride: 'font-language-override',
  fontMaxSize: 'font-max-size',
  fontMinSize: 'font-min-size',
  fontOpticalSizing: 'font-optical-sizing',
  fontPalette: 'font-palette',
  fontPresentation: 'font-presentation',
  fontSize: 'font-size',
  fontSizeAdjust: 'font-size-adjust',
  fontStretch: 'font-stretch',
  fontStyle: 'font-style',
  fontSynthesis: 'font-synthesis',
  fontVariant: 'font-variant',
  fontVariantAlternates: 'font-variant-alternates',
  fontVariantCaps: 'font-variant-caps',
  fontVariantEastAsian: 'font-variant-east-asian',
  fontVariantLigatures: 'font-variant-ligatures',
  fontVariantNumeric: 'font-variant-numeric',
  fontVariantPosition: 'font-variant-position',
  fontVariationSettings: 'font-variation-settings',
  fontWeight: 'font-weight',
  footnoteDisplay: 'footnote-display',
  footnotePolicy: 'footnote-policy',
  gap: 'gap',
  glyphOrientationVertical: 'glyph-orientation-vertical',
  grid: 'grid',
  gridArea: 'grid-area',
  gridAutoColumns: 'grid-auto-columns',
  gridAutoFlow: 'grid-auto-flow',
  gridAutoRows: 'grid-auto-rows',
  gridColumn: 'grid-column',
  gridColumnEnd: 'grid-column-end',
  gridColumnGap: 'grid-column-gap',
  gridColumnStart: 'grid-column-start',
  gridGap: 'grid-gap',
  gridRow: 'grid-row',
  gridRowEnd: 'grid-row-end',
  gridRowGap: 'grid-row-gap',
  gridRowStart: 'grid-row-start',
  gridTemplate: 'grid-template',
  gridTemplateAreas: 'grid-template-areas',
  gridTemplateColumns: 'grid-template-columns',
  gridTemplateRows: 'grid-template-rows',
  hangingPunctuation: 'hanging-punctuation',
  height: 'height',
  hyphenateCharacter: 'hyphenate-character',
  hyphenateLimitChars: 'hyphenate-limit-chars',
  hyphenateLimitLast: 'hyphenate-limit-last',
  hyphenateLimitLines: 'hyphenate-limit-lines',
  hyphenateLimitZone: 'hyphenate-limit-zone',
  hyphens: 'hyphens',
  imageOrientation: 'image-orientation',
  imageResolution: 'image-resolution',
  initialLetter: 'initial-letter',
  initialLetterAlign: 'initial-letter-align',
  initialLetterWrap: 'initial-letter-wrap',
  inlineSize: 'inline-size',
  inset: 'inset',
  insetBlock: 'inset-block',
  insetBlockEnd: 'inset-block-end',
  insetBlockStart: 'inset-block-start',
  insetInline: 'inset-inline',
  insetInlineEnd: 'inset-inline-end',
  insetInlineStart: 'inset-inline-start',
  isolation: 'isolation',
  justifyContent: 'justify-content',
  justifyItems: 'justify-items',
  justifySelf: 'justify-self',
  left: 'left',
  letterSpacing: 'letter-spacing',
  lightingColor: 'lighting-color',
  lineBreak: 'line-break',
  lineGrid: 'line-grid',
  lineHeight: 'line-height',
  lineHeightStep: 'line-height-step',
  lineSnap: 'line-snap',
  listStyle: 'list-style',
  listStyleImage: 'list-style-image',
  listStylePosition: 'list-style-position',
  listStyleType: 'list-style-type',
  margin: 'margin',
  marginBlock: 'margin-block',
  marginBlockEnd: 'margin-block-end',
  marginBlockStart: 'margin-block-start',
  marginBottom: 'margin-bottom',
  marginInline: 'margin-inline',
  marginInlineEnd: 'margin-inline-end',
  marginInlineStart: 'margin-inline-start',
  marginLeft: 'margin-left',
  marginRight: 'margin-right',
  marginTop: 'margin-top',
  marginX: 'marginX',
  marginY: 'marginY',
  marker: 'marker',
  markerEnd: 'marker-end',
  markerKnockoutLeft: 'marker-knockout-left',
  markerKnockoutRight: 'marker-knockout-right',
  markerMid: 'marker-mid',
  markerPattern: 'marker-pattern',
  markerSegment: 'marker-segment',
  markerSide: 'marker-side',
  markerStart: 'marker-start',
  marqueeDirection: 'marquee-direction',
  marqueeLoop: 'marquee-loop',
  marqueeSpeed: 'marquee-speed',
  marqueeStyle: 'marquee-style',
  mask: 'mask',
  maskBorder: 'mask-border',
  maskBorderMode: 'mask-border-mode',
  maskBorderOutset: 'mask-border-outset',
  maskBorderRepeat: 'mask-border-repeat',
  maskBorderSlice: 'mask-border-slice',
  maskBorderSource: 'mask-border-source',
  maskBorderWidth: 'mask-border-width',
  maskClip: 'mask-clip',
  maskComposite: 'mask-composite',
  maskImage: 'mask-image',
  maskMode: 'mask-mode',
  maskOrigin: 'mask-origin',
  maskPosition: 'mask-position',
  maskRepeat: 'mask-repeat',
  maskSize: 'mask-size',
  maskType: 'mask-type',
  maxBlockSize: 'max-block-size',
  maxHeight: 'max-height',
  maxInlineSize: 'max-inline-size',
  maxLines: 'max-lines',
  maxWidth: 'max-width',
  minBlockSize: 'min-block-size',
  minHeight: 'min-height',
  minInlineSize: 'min-inline-size',
  minWidth: 'min-width',
  mixBlendMode: 'mix-blend-mode',
  navDown: 'nav-down',
  navLeft: 'nav-left',
  navRight: 'nav-right',
  navUp: 'nav-up',
  objectFit: 'object-fit',
  objectPosition: 'object-position',
  offset: 'offset',
  offsetAfter: 'offset-after',
  offsetAnchor: 'offset-anchor',
  offsetBefore: 'offset-before',
  offsetDistance: 'offset-distance',
  offsetEnd: 'offset-end',
  offsetPath: 'offset-path',
  offsetPosition: 'offset-position',
  offsetRotate: 'offset-rotate',
  offsetStart: 'offset-start',
  opacity: 'opacity',
  order: 'order',
  orphans: 'orphans',
  outline: 'outline',
  outlineColor: 'outline-color',
  outlineOffset: 'outline-offset',
  outlineStyle: 'outline-style',
  outlineWidth: 'outline-width',
  overflow: 'overflow',
  overflowStyle: 'overflow-style',
  overflowWrap: 'overflow-wrap',
  overflowX: 'overflow-x',
  overflowY: 'overflow-y',
  padding: 'padding',
  paddingBlock: 'padding-block',
  paddingBlockEnd: 'padding-block-end',
  paddingBlockStart: 'padding-block-start',
  paddingBottom: 'padding-bottom',
  paddingInline: 'padding-inline',
  paddingInlineEnd: 'padding-inline-end',
  paddingInlineStart: 'padding-inline-start',
  paddingLeft: 'padding-left',
  paddingRight: 'padding-right',
  paddingTop: 'padding-top',
  paddingX: 'paddingX',
  paddingY: 'paddingY',
  page: 'page',
  pageBreakAfter: 'page-break-after',
  pageBreakBefore: 'page-break-before',
  pageBreakInside: 'page-break-inside',
  pause: 'pause',
  pauseAfter: 'pause-after',
  pauseBefore: 'pause-before',
  perspective: 'perspective',
  perspectiveOrigin: 'perspective-origin',
  pitch: 'pitch',
  pitchRange: 'pitch-range',
  placeContent: 'place-content',
  placeItems: 'place-items',
  placeSelf: 'place-self',
  playDuring: 'play-during',
  pointerEvents: 'pointer-events',
  position: 'position',
  presentationLevel: 'presentation-level',
  quotes: 'quotes',
  regionFragment: 'region-fragment',
  resize: 'resize',
  rest: 'rest',
  restAfter: 'rest-after',
  restBefore: 'rest-before',
  richness: 'richness',
  right: 'right',
  rotation: 'rotation',
  rotationPoint: 'rotation-point',
  rowGap: 'row-gap',
  rubyAlign: 'ruby-align',
  rubyMerge: 'ruby-merge',
  rubyPosition: 'ruby-position',
  running: 'running',
  scrollBehavior: 'scroll-behavior',
  scrollPadding: 'scroll-padding',
  scrollPaddingBlock: 'scroll-padding-block',
  scrollPaddingBlockEnd: 'scroll-padding-block-end',
  scrollPaddingBlockStart: 'scroll-padding-block-start',
  scrollPaddingBottom: 'scroll-padding-bottom',
  scrollPaddingInline: 'scroll-padding-inline',
  scrollPaddingInlineEnd: 'scroll-padding-inline-end',
  scrollPaddingInlineStart: 'scroll-padding-inline-start',
  scrollPaddingLeft: 'scroll-padding-left',
  scrollPaddingRight: 'scroll-padding-right',
  scrollPaddingTop: 'scroll-padding-top',
  scrollSnapAlign: 'scroll-snap-align',
  scrollSnapMargin: 'scroll-snap-margin',
  scrollSnapMarginBlock: 'scroll-snap-margin-block',
  scrollSnapMarginBlockEnd: 'scroll-snap-margin-block-end',
  scrollSnapMarginBlockStart: 'scroll-snap-margin-block-start',
  scrollSnapMarginBottom: 'scroll-snap-margin-bottom',
  scrollSnapMarginInline: 'scroll-snap-margin-inline',
  scrollSnapMarginInlineEnd: 'scroll-snap-margin-inline-end',
  scrollSnapMarginInlineStart: 'scroll-snap-margin-inline-start',
  scrollSnapMarginLeft: 'scroll-snap-margin-left',
  scrollSnapMarginRight: 'scroll-snap-margin-right',
  scrollSnapMarginTop: 'scroll-snap-margin-top',
  scrollSnapStop: 'scroll-snap-stop',
  scrollSnapType: 'scroll-snap-type',
  scrollbarGutter: 'scrollbar-gutter',
  shapeImageThreshold: 'shape-image-threshold',
  shapeInside: 'shape-inside',
  shapeMargin: 'shape-margin',
  shapeOutside: 'shape-outside',
  speak: 'speak',
  speakAs: 'speak-as',
  speakHeader: 'speak-header',
  speakNumeral: 'speak-numeral',
  speakPunctuation: 'speak-punctuation',
  speechRate: 'speech-rate',
  stress: 'stress',
  stringSet: 'string-set',
  stroke: 'stroke',
  strokeAlign: 'stroke-align',
  strokeAlignment: 'stroke-alignment',
  strokeBreak: 'stroke-break',
  strokeColor: 'stroke-color',
  strokeDashCorner: 'stroke-dash-corner',
  strokeDashJustify: 'stroke-dash-justify',
  strokeDashadjust: 'stroke-dashadjust',
  strokeDasharray: 'stroke-dasharray',
  strokeDashcorner: 'stroke-dashcorner',
  strokeDashoffset: 'stroke-dashoffset',
  strokeImage: 'stroke-image',
  strokeLinecap: 'stroke-linecap',
  strokeLinejoin: 'stroke-linejoin',
  strokeMiterlimit: 'stroke-miterlimit',
  strokeOpacity: 'stroke-opacity',
  strokeOrigin: 'stroke-origin',
  strokePosition: 'stroke-position',
  strokeRepeat: 'stroke-repeat',
  strokeSize: 'stroke-size',
  strokeWidth: 'stroke-width',
  tabSize: 'tab-size',
  tableLayout: 'table-layout',
  textAlign: 'text-align',
  textAlignAll: 'text-align-all',
  textAlignLast: 'text-align-last',
  textCombineUpright: 'text-combine-upright',
  textDecoration: 'text-decoration',
  textDecorationColor: 'text-decoration-color',
  textDecorationLine: 'text-decoration-line',
  textDecorationSkip: 'text-decoration-skip',
  textDecorationStyle: 'text-decoration-style',
  textEmphasis: 'text-emphasis',
  textEmphasisColor: 'text-emphasis-color',
  textEmphasisPosition: 'text-emphasis-position',
  textEmphasisStyle: 'text-emphasis-style',
  textIndent: 'text-indent',
  textJustify: 'text-justify',
  textOrientation: 'text-orientation',
  textOverflow: 'text-overflow',
  textShadow: 'text-shadow',
  textSpaceCollapse: 'text-space-collapse',
  textSpaceTrim: 'text-space-trim',
  textSpacing: 'text-spacing',
  textTransform: 'text-transform',
  textUnderlinePosition: 'text-underline-position',
  textWrap: 'text-wrap',
  top: 'top',
  transform: 'transform',
  transformBox: 'transform-box',
  transformOrigin: 'transform-origin',
  transformStyle: 'transform-style',
  transition: 'transition',
  transitionDelay: 'transition-delay',
  transitionDuration: 'transition-duration',
  transitionProperty: 'transition-property',
  transitionTimingFunction: 'transition-timing-function',
  unicodeBidi: 'unicode-bidi',
  userSelect: 'user-select',
  verticalAlign: 'vertical-align',
  visibility: 'visibility',
  voiceBalance: 'voice-balance',
  voiceDuration: 'voice-duration',
  voiceFamily: 'voice-family',
  voicePitch: 'voice-pitch',
  voiceRange: 'voice-range',
  voiceRate: 'voice-rate',
  voiceStress: 'voice-stress',
  voiceVolume: 'voice-volume',
  volume: 'volume',
  whiteSpace: 'white-space',
  widows: 'widows',
  width: 'width',
  willChange: 'will-change',
  wordBreak: 'word-break',
  wordSpacing: 'word-spacing',
  wordWrap: 'word-wrap',
  wrapAfter: 'wrap-after',
  wrapBefore: 'wrap-before',
  wrapFlow: 'wrap-flow',
  wrapInside: 'wrap-inside',
  wrapThrough: 'wrap-through',
  writingMode: 'writing-mode',
  zIndex: 'z-index',
};
