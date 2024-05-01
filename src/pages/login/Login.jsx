import { useState } from 'react'; 
import { Link } from "react-router-dom";

export default function LoginPag() {
    
    const [loggedIn, setLoggedIn] = useState(false);

    const [path, setPath] = useState('login');

    const [showNegacion, setShowNegacion] = useState(false);

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleUser = (event) => {setUser(event.target.value)};
    const handlePasswrod = (event) => {setPassword(event.target.value)};

    function checkCredentials(){
        const userCheck = "Juan"
        const passCheck = "1234"
        
        if(user == userCheck && password == passCheck){
            console.log("Acces");
        }
        else{
            console.log("Denied");
            setShowNegacion(true);
        }
    }

    return (
    <>
        <section className="bg-gray-50 dark:bg-dpurp">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-tpurp rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-bwhite md:text-2xl dark:text-white">
                            Entra a tu Cuenta
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <a className={`${showNegacion ? 'block' : 'hidden'} text-dpurp mb-2`}>User o Password Incorrectos!</a>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-bwhite dark:text-white">Username </label>
                                <input onChange={handleUser}  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John_Shmit" required/>
                            </div>

                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-bwhite dark:text-white">Password</label>
                                <input type="password" onChange={handlePasswrod} placeholder="123456" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                            </div>

                            <div  className="w-full text-bwhite bg-mpurp hover:bg-dpurp focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                                <Link to={`/${path}`}  >Log in</Link>
                            </div>

                            <p className="text-sm font-light text-twhite dark:text-bwhite">
                                No tienes cuenta? <Link to={"/signUp"}  className="font-medium text-primary-600 hover:underline dark:text-dpurp">Crea Una</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
}