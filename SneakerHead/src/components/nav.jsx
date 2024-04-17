function Nav(){
    return(
        <>
            <div className="parent">
                <div className="inner">
                    <div className="name"><a href="">sneakerHead</a></div>
                    <div className="ham" id = "ham" onClick={Hamburger}><i className="fa-solid fa-bars"></i></div>
                    <ul>
                        <li><a href="">Men</a></li>
                        <li><a href="">Women</a></li>
                        <li><a href="">Kids</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li className="theme-logo"><i className="fa-solid fa-sliders" id="logo-th" onClick={changeMode}></i></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
function Hamburger(){
    document.body.classList.toggle('ham-menu');
}
function changeMode(){
    document.body.classList.toggle('dark-mode');
}
export default Nav