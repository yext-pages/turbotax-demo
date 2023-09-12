import Button from "../atoms/Button";
import Search from "../../assets/icons/Search";
// import Lock from '../../assets/icons/Lock';

interface Props {

}

const Header: React.FC<Props> = () => {
  return (
    <header
      className={'flex justify-between items-center px-5 py-4 sticky top-0 bg-white z-10 border-b-1 border-pepper20'}>
      <a href={"https://turbotax.intuit.com/"}>
        <img src={'https://lib.intuitcdn.net/img/nav/3.0/intuit-tt-verified-pro.png'} height={32}
             className={'h-8 w-auto'} alt={'Intuit TurboTax Verified Pro'}/>
        {/*<img src={'https://digitalasset.intuit.com/IMAGE/A1Ess9OMc/turbo-checkball.svg'} height={32}*/}
        {/*     className={'h-8 w-auto visible s:hidden'} alt={'TurboTax'}/>*/}
      </a>

      <div className={'flex gap-5'}>
        {/*<Button priority={'secondary'} purpose={'passive'} iconBefore={<Search/>}>Find a pro</Button>*/}
        {/*<Button priority={'secondary'} iconBefore={<Lock/>} as={'a'} href={'https://myturbotax.intuit.com/'}>Sign*/}
        {/*  in</Button>*/}
      </div>
    </header>
  )
}

export default Header;