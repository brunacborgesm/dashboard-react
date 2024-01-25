import { Link } from "react-router-dom"

export const NotFound = () => {

  return (
    
    <div>
        <h1>404: The page you are looking for isn't here</h1>
        <p>You either tried some shady route or you camee here by mistake. Whichever it is, try using the navigation</p>
        <Link to="/">Go back to dashboard</Link>
    </div>

  )
}