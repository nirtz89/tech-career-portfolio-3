import { Switch, BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { MenuIcon } from '../Common/CommonStyles'

function Links() {
    return (
        <div>
           <Link to="/"> <MenuIcon onClick={() => props.onChangePage('home')} src="https://image.flaticon.com/icons/png/512/1946/1946488.png" alt="" /></Link>
           <Link to="/portfolio"><MenuIcon onClick={() => props.onChangePage('portfolio')} src="https://image.flaticon.com/icons/png/512/1077/1077063.png" alt="" /></Link>
           <Link to="/skills"><MenuIcon  onClick={() => props.onChangePage('skills')} src="https://image.flaticon.com/icons/png/512/999/999786.png" alt="" /></Link>
           <Link to="/contact"><MenuIcon onClick={() => props.onChangePage('contact')} src="" alt="" /></Link>

        </div>
    )
}
export default Links;