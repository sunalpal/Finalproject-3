import { NavLink } from "react-router-dom"
const Nav = () => {
  return (
  <div className="flex gap-4 p-4 bg-gray-100 text-lg 
                sm:text-xl md:text-2xl">
  <NavLink className="text-gray-800 hover:text-blue-600" to="/">Home</NavLink>
  <NavLink className="text-gray-800 hover:text-blue-600" to="/login">Login</NavLink>
  <NavLink className="text-gray-800 hover:text-blue-600" to="/products">Products</NavLink>
</div>

  )
}

export default Nav