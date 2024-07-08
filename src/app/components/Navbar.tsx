import Link from "next/link"
import LogoNewVis from "./LogoNewVis"

const Navbar = () =>{
    return(
         
        <header className="w-full flex flex-row justify-between text-greenvogue-950 body-font bg-greenvogue-400 items-center">
          
            <div >
                <Link href="/">
                    <LogoNewVis ></LogoNewVis>              
                </Link>
            </div>
            
            <nav className="text-base ">
              <Link className="mr-5 text-center hover:text-greenvogue-600" href="/inserti">Inserti</Link>
              <Link className="mr-5 text-center hover:text-greenvogue-600" href="/utensili">Utensili</Link>
              <Link className="mr-5 text-center hover:text-greenvogue-600" href="/Frese">Frese</Link>
              <Link className="mr-5 text-center hover:text-greenvogue-600" href="/Coltelli">Coltelli</Link>
            </nav>
            
           
          
        </header>
         
    )
}

export default Navbar