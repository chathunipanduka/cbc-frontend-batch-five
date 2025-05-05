import { Link } from "react-router-dom";
import UserData from "./userData";


export default function Header() {
  return (
    <div className="bg-yellow-600">
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/signup">Signup</Link>
    </div>
  )
}