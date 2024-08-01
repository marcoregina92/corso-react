import './Navbar.css';
import Link from './Link';


function Navbar() {

    const x = 11;

    return (
        <>
            <div className={`rounded-lg w-72 h-72 ${x < 10 ? "bg-red-500 rotate-45" : "bg-sky-500"
                }`}>
            </div>
            <ul>
                <li className='color-red 500'>
                    <Link>
                        Home
                    </Link>
                </li>
                <li>
                    <Link>
                        Contatti
                    </Link>
                </li>
                <li>
                    <Link>
                        Chi siamo
                    </Link>
                </li>
                <li>
                    <Link>
                        About
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar