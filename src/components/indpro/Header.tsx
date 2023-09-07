import Button from "../atoms/Button";
import Lock from '../../assets/icons/Lock';

interface Props {

}

const Header: React.FC<Props> = () => {
  return (
    <header className={'flex justify-between items-center px-5 py-4'}>
      <img src={'https://lib.intuitcdn.net/img/nav/3.0/intuit-tt-verified-pro.png'} height={32} className={'h-8 w-auto'} />

      <div className={'flex gap-5'}>
        <Button>Find Your Tax Pro Match</Button>
        <Button priority={'secondary'} iconBefore={<Lock/>}>Sign in</Button>
      </div>
    </header>
  )
}

export default Header;