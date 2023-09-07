export enum TypeScale {
  Display01 = 'Display01',
  Display02 = 'Display02',
  Display03 = 'Display03',
  Display04 = 'Display04',
  Headline01 = 'Headline01',
  Headline02 = 'Headline02',
  Headline03 = 'Headline03',
  Headline04 = 'Headline04',
  Headline05 = 'Headline05',
  Headline06 = 'Headline06',
  Body01 = 'Body01',
  Body02 = 'Body02',
  Body03 = 'Body03',
  Body04 = 'Body04',
}

export type FontWeight = 'medium' | 'thin' | 'regular' | 'demi' | 'bold' | 'heavy';


export const defaultFontWeights: Record<TypeScale, FontWeight> = {
  [TypeScale.Display01]: 'bold',
  [TypeScale.Display02]: 'bold',
  [TypeScale.Display03]: 'bold',
  [TypeScale.Display04]: 'bold',
  [TypeScale.Headline01]: 'demi',
  [TypeScale.Headline02]: 'demi',
  [TypeScale.Headline03]: 'demi',
  [TypeScale.Headline04]: 'medium',
  [TypeScale.Headline05]: 'medium',
  [TypeScale.Headline06]: 'medium',
  [TypeScale.Body01]: 'regular',
  [TypeScale.Body02]: 'regular',
  [TypeScale.Body03]: 'regular',
  [TypeScale.Body04]: 'regular',
}

export const fontSizeMap: Record<TypeScale, string> = {
  [TypeScale.Display01]: 's:text-12 text-11',
  [TypeScale.Display02]: 's:text-11 text-10',
  [TypeScale.Display03]: 's:text-10 text-9',
  [TypeScale.Display04]: 's:text-9 text-8',
  [TypeScale.Headline01]: 's:text-9 text-8',
  [TypeScale.Headline02]: 's:text-8 text-7',
  [TypeScale.Headline03]: 's:text-7 text-6',
  [TypeScale.Headline04]: 's:text-6 text-5',
  [TypeScale.Headline05]: 's:text-5 text-4',
  [TypeScale.Headline06]: 's:text-4 text-3',
  [TypeScale.Body01]: 's:text-4 text-3',
  [TypeScale.Body02]: 's:text-3 text-3',
  [TypeScale.Body03]: 's:text-2 text-2',
  [TypeScale.Body04]: 's:text-1 text-1',
}

export const fontWeightMap: Record<FontWeight, string> = {
  thin: 'font-thin',
  regular: 'font-normal',
  medium: 'font-medium',
  demi: 'font-semibold',
  bold: 'font-bold',
  heavy: 'font-black',
}
