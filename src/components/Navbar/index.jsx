import './navbar.css';

const Navbar = ({setImageSrc}) => {
    return (
        <div className="navbar">
            <span>Photo Editor</span>
            <input type="text" placeholder='Image Link'  onChange={(e)=> setImageSrc(e.target.value)}/>
        </div>
    );
}

export default Navbar;