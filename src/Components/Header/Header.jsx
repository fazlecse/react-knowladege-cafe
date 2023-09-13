import profile from '../../assets/images/profile.png'
const Header = () => {
  return (
    <div className='flex justify-between items-center container mx-auto mt-4 border-b-2 pb-1'>
      <h1 className="text-4xl font-bold">React Knowladge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
