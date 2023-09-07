import { webpSrcSet, jpegSrcSet } from '../../assets/images/stock_bg';

const BackgroundBanner = () => {
  return (
    <picture >
      <source srcSet={webpSrcSet} type="image/webp" />
      <img srcSet={jpegSrcSet} alt={""} className={'h-[300px]'} />
    </picture>
  )
};

export default BackgroundBanner;