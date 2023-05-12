import App from "../App";
import "./header.css";

function Header() {
   return (
           <div className="header">
               <div className=" nav-bar container">
                   <div className="logo">
                       <img
                           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQY_KbcSkPEpmSrXyKGzThSOtPwywedtdtlIAFM-RJxnF6NssG2J8OFl4AgrWZxLNmdyw&usqp=CAU"
                           alt=""/>
                   </div>
                   <ul className="items">
                       <li><a href="bai1">Bai 1</a></li>
                       <li><a href="bai2">bai 2</a></li>
                       <li><a href="bai3">bai 3</a></li>
                   </ul>
               </div>
           </div>

   );
}
export default Header