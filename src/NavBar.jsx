import { Link } from "react-router-dom";
import { Popup } from 'reactjs-popup';

export default function NavBar(){

    return(
        <>
            <nav className="bg-dpurp h-24 px-5 flex justify-between items-center text-twhite">
                <Link to={"/"} className=" text-7xl text-center" >OrgaNice</Link>

                
                
                <Popup
                trigger={<button className="bg-mpurp text-mpurp h-1/2 rounded-full text-center">............</button>}
                position={'bottom center'}
                on={['hover', 'focus']}
                >
                    <div className="bg-mpurp  text-twhite text-center felx flex-col rounded-lg">
                        <div className=" p-2 hover:bg-dpurp/[.6] w-full">
                            <Link to={"/login"} className="text-center">Log-in</Link>
                        </div>
                        <div className="p-2 rounded-b-lg hover:bg-dpurp/[.6]">
                            <Link to={"/signUp"}>Sign-up</Link>
                        </div>
                    </div>
                </Popup>
            </nav>
        </>
    )
}