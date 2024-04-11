import logo from '../assets/logo/pokemon-logo.png'

const Logo = () => {
  return (
    <div className=" flex items-center justify-center">
        <img src={logo} className='w-[300px] h-[200px]' alt=""/>
    </div>
  )
}

export default Logo