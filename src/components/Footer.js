import {Link} from 'react-router-dom'
import {BsLinkedin} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';

export default function Footer() {

    const Links = [
    ]

    return (
      <div className="footer">
       <div className="left">
        <div className="nav-logo">e-Learn</div>
        &copy; 2023
       </div>
       <div className="middle">
        <span>Created and Designed by</span><span> Arya Kieputra & Salvator Sangi</span>
        <span><a href=""><BsLinkedin /></a>{" "}<a href="https://github.com/ariyakieputra/PWL-UAS"><AiFillGithub /></a></span>
        
       </div>
       <div className="right">
        <Link to="/teacher">Become Teacher on e-Learn</Link>
       </div>
      </div>
    );
  }