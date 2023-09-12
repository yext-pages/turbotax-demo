import {forwardRef} from "react";
import type React from 'react';
import {TextColor} from "./TextColor";
import {PolymorphicComponentPropWithRef, PolymorphicRef} from "../../types/polymorphic";
import {
  defaultFontWeights,
  FontWeight,
  fontWeightMap,
  fontSizeMap,
  TypeScale
} from "./TypeScale";

type TextElement =
  'div'
  | 'span'
  | 'p'
  | 'a'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'label'
  | 'legend'
  | 'caption';

const defaultElement: Record<TypeScale, TextElement> = {
  [TypeScale.Display01]: 'h1',
  [TypeScale.Display02]: 'h1',
  [TypeScale.Display03]: 'h1',
  [TypeScale.Display04]: 'h1',
  [TypeScale.Headline01]: 'h1',
  [TypeScale.Headline02]: 'h2',
  [TypeScale.Headline03]: 'h3',
  [TypeScale.Headline04]: 'h4',
  [TypeScale.Headline05]: 'h5',
  [TypeScale.Headline06]: 'h6',
  [TypeScale.Body01]: 'p',
  [TypeScale.Body02]: 'p',
  [TypeScale.Body03]: 'p',
  [TypeScale.Body04]: 'p',
} as const;


export type Props<C extends TextElement, V extends TypeScale> = PolymorphicComponentPropWithRef<
  C,
  {
    variant?: V;
    weight?: FontWeight;
    color?: TextColor;
  }
>

type TypographyComponent = <V extends TypeScale = TypeScale.Body01, C extends TextElement = (typeof defaultElement)[V]>(props: Props<C, V>) => React.ReactElement | null;

const Typography: TypographyComponent = forwardRef(
  <V extends TypeScale = TypeScale.Body01, C extends TextElement = (typeof defaultElement)[V]>(
    {as, variant, weight, color, children, className, ...html}: Props<C, V>,
    ref?: PolymorphicRef<C>,
  ) => {
    if (!variant) {
      console.error('no variant provided to Typography component');
    }
    const typeScale = variant || TypeScale.Body01;
    const Element = as || defaultElement[typeScale];

    const weightClass = fontWeightMap[(weight || defaultFontWeights[typeScale])];
    const sizeClass = fontSizeMap[typeScale];
    const colorClass = color || ''; // blank so color is inherited
    const fullClassName = `${weightClass} ${sizeClass} ${colorClass} ${className || ''}`;

    return (
      // @ts-ignore
      <Element {...html} className={fullClassName} ref={ref}>
        {children}
      </Element>
    )
  }
)

export default Typography;

type SpecificTypographyComponent<V extends TypeScale> = <C extends TextElement = (typeof defaultElement)[V]>(props: Props<C, V>) => React.ReactElement | null;

export const D1: SpecificTypographyComponent<TypeScale.Display01> = forwardRef(<C extends TextElement = (typeof defaultElement)[TypeScale.Display01]>(props: Props<C, TypeScale.Display01>, ref: PolymorphicRef<C>) => (
  <Typography {...props} ref={ref} variant={TypeScale.Display01}/>)
);


export const D2: SpecificTypographyComponent<TypeScale.Display02> = forwardRef(<C extends TextElement = (typeof defaultElement)[TypeScale.Display02]>(props: Props<C, TypeScale.Display02>, ref: PolymorphicRef<C>) => (
  <Typography {...props} ref={ref} variant={TypeScale.Display02}/>)
);

export const D3: SpecificTypographyComponent<TypeScale.Display03> = forwardRef(<C extends TextElement = (typeof defaultElement)[TypeScale.Display03]>(props: Props<C, TypeScale.Display03>, ref: PolymorphicRef<C>) => (
  <Typography {...props} ref={ref} variant={TypeScale.Display03}/>)
);

export const D4: SpecificTypographyComponent<TypeScale.Display04> = forwardRef(<C extends TextElement = (typeof defaultElement)[TypeScale.Display04]>(props: Props<C, TypeScale.Display04>, ref: PolymorphicRef<C>) => (
  <Typography {...props} ref={ref} variant={TypeScale.Display04}/>)
);

export const H1: SpecificTypographyComponent<TypeScale.Headline01> = forwardRef(<C extends TextElement = (typeof defaultElement)[TypeScale.Headline01]>(props: Props<C, TypeScale.Headline01>, ref: PolymorphicRef<C>) => (
  <Typography {...props} ref={ref} variant={TypeScale.Headline01}/>)
);

export const H2: SpecificTypographyComponent<TypeScale.Headline02> = forwardRef(<C extends TextElement = (typeof defaultElement)[TypeScale.Headline02]>(props: Props<C, TypeScale.Headline02>, ref: PolymorphicRef<C>) => (
  <Typography {...props} ref={ref} variant={TypeScale.Headline02}/>)
);

export const H3: SpecificTypographyComponent<TypeScale.Headline03> = forwardRef(<C extends TextElement = (typeof defaultElement)[TypeScale.Headline03]>(props: Props<C, TypeScale.Headline03>, ref: PolymorphicRef<C>) => (
  <Typography {...props} ref={ref} variant={TypeScale.Headline03}/>)
);

export const H4: SpecificTypographyComponent<TypeScale.Headline04> = forwardRef(<C extends TextElement = (typeof defaultElement)[TypeScale.Headline04]>(props: Props<C, TypeScale.Headline04>, ref: PolymorphicRef<C>) => (
  <Typography {...props} ref={ref} variant={TypeScale.Headline04}/>)
);

export const H5: SpecificTypographyComponent<TypeScale.Headline05> = forwardRef(<C extends TextElement = (typeof defaultElement)[TypeScale.Headline05]>(props: Props<C, TypeScale.Headline05>, ref: PolymorphicRef<C>) => (
  <Typography {...props} ref={ref} variant={TypeScale.Headline05}/>)
);

export const H6: SpecificTypographyComponent<TypeScale.Headline06> = forwardRef(<C extends TextElement = (typeof defaultElement)[TypeScale.Headline06]>(props: Props<C, TypeScale.Headline06>, ref: PolymorphicRef<C>) => (
  <Typography {...props} ref={ref} variant={TypeScale.Headline06}/>)
);

export const B1: SpecificTypographyComponent<TypeScale.Body01> = forwardRef(<C extends TextElement = (typeof defaultElement)[TypeScale.Body01]>(props: Props<C, TypeScale.Body01>, ref: PolymorphicRef<C>) => (
  <Typography {...props} ref={ref} variant={TypeScale.Body01}/>)
);

export const B2: SpecificTypographyComponent<TypeScale.Body02> = forwardRef(<C extends TextElement = (typeof defaultElement)[TypeScale.Body02]>(props: Props<C, TypeScale.Body02>, ref: PolymorphicRef<C>) => (
  <Typography {...props} ref={ref} variant={TypeScale.Body02}/>)
);

export const B3: SpecificTypographyComponent<TypeScale.Body03> = forwardRef(<C extends TextElement = (typeof defaultElement)[TypeScale.Body03]>(props: Props<C, TypeScale.Body03>, ref: PolymorphicRef<C>) => (
  <Typography {...props} ref={ref} variant={TypeScale.Body03}/>)
);

export const B4: SpecificTypographyComponent<TypeScale.Body04> = forwardRef(<C extends TextElement = (typeof defaultElement)[TypeScale.Body04]>(props: Props<C, TypeScale.Body04>, ref: PolymorphicRef<C>) => (
  <Typography {...props} ref={ref} variant={TypeScale.Body04}/>)
);