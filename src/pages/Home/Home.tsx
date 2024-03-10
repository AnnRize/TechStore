import { Link } from "react-router-dom";
import style from "./Home.module.scss";
import { observer } from "mobx-react-lite";

const Home = observer(() => {
   return (
      <div className={style.container}>
         <aside className={style.aside}>
            <h1>
               <Link to={"catalog"}>Каталог</Link>
            </h1>
            <nav className={style.navbar}>
               <ul>
                  <li>
                     <Link to={"catalog/periferiya-i-aksessuary"}>
                        Периферия и аксессуары
                     </Link>
                  </li>
                  <li>
                     <Link to={"catalog/osnovnye-komplektuyushhie-dlya-pk"}>
                        Основные комплектующие для ПК
                     </Link>
                  </li>
               </ul>
            </nav>
         </aside>

         
      </div>
   );
});

export default Home;
