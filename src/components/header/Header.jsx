import { NavDesktop } from './navbar component/nav-desktop';
import { NavMobile } from './navbar component/nav-mobile';
import { logo } from '../../assets';
import HeadDesctop from './header component/head-desktop';

function Header() {
  return (
    <header className='py-4 px-20 top-0 flex justify-between items-center fixed w-full z-10 bg-white border-b-2 border-black sm: flex '>
      <a href="/">
        <img src={logo} alt="sm-logo" className='w-24 h-11 sm:w-48 sm:h-16' />
      </a>
      <div className="flex">
        <NavMobile />
        <NavDesktop />
      </div>
      <div className="flex">
        <HeadDesctop/>
      </div>
    </header>
  );
}

export default Header;


