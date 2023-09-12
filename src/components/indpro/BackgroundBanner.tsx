import { webpSrcSet, jpegSrcSet } from '../../assets/images/stock_bg';

const BackgroundBanner = () => {
  return (
    <picture aria-hidden>
      <source srcSet={webpSrcSet} type="image/webp" />
      <img srcSet={jpegSrcSet} alt={""} className={'h-18 w-full s:h-[300px]'} />
    </picture>
  )
};

export default BackgroundBanner;