import logo from '/src/images/troll-face.png'
function Header(){
    return(
        <header className="header">
            <img 
                src={logo} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>  
    )
}
export default Header;
