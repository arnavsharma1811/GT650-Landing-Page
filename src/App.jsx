import './index.css';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import NavBar from './components/navBar';
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
 <main>
 <NavBar/>
 </main>
  );
}