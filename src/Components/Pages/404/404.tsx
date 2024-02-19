import { NavBar } from "../../Navbar";
import { FourZeroFourPartial } from "../../SubPages/404-Partial/404Partial";
import "./styles.css";

export const FourZeroFourPage:React.FC = () =>{
    return(
        <div id="page-styles">
        <NavBar/>
        <FourZeroFourPartial></FourZeroFourPartial>
        
        </div>
    )
}
