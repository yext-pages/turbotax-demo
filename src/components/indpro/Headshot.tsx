import HeadshotImage from '../../assets/images/headshot.png';

const Headshot: React.FC = () => {
  return <img src={HeadshotImage} className={'w-[330px] h-[330px] rounded-full'} />
}

export default Headshot;