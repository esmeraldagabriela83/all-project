import React, {useState , useEffect} from "react";
import Menu from "./Menu";




////////////////////////////
function MenuNav(props){
const [showMenu , setShowMenu]=useState(false);

const handleMenu=(event , status) =>{
  setShowMenu(status);
}

//status este parametru formal al arrow function handleMenu
//true si false  sunt parametri reali al arrow function handleMenu ce vin de la <a></a> prin metoda onClick

return (
  <section className={"mobile"}>
<header className={"mobile-menu"}>
  {!showMenu && <a href="#" className={"open-menu"} onClick={(event) =>handleMenu(event , true)}>
                <ion-icon name="menu-outline"></ion-icon>
                </a>}

 {showMenu ==true ?
   <div>
   <a href="#" className={"close-menu"} onClick={(event) =>handleMenu(event , false)}>
   <ion-icon name="close-circle-outline"></ion-icon>
   </a>
    <Menu/>
   </div> :null}

</header>
  </section>
);
}

export default MenuNav;
