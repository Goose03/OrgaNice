import './estilo.css';
import Popup from 'reactjs-popup';
import { useState } from 'react'; 

export default function Login() {
    const [showSubmenu, setShowSubmenu] = useState(false);

    const captura = () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const toggleSubmenu = () => {
        setShowSubmenu(false);
    };

    const openSubmenu = () => {
        setShowSubmenu(true);
    };

    return (
        <>
            <header>
                <nav className="bg-dpurp">
                    <ul className="flex flex-row-reverse ">
                        <li>
                            <a href="#"  onMouseEnter={openSubmenu} onMouseLeave={toggleSubmenu} className="block px-4 py-3 text-bwhite">Cuenta</a>
                            <ul className={`absolute ${showSubmenu ? 'block' : 'hidden'} bg-dpurple w-full`}>
                                <Popup trigger={<li><a href="#"  onMouseEnter={openSubmenu} onMouseLeave={toggleSubmenu} className="block px-4 py-3 bg-mpurp text-bwhite" onClick={toggleSubmenu}>Log in</a></li>} modal nested onMouseEnter={toggleSubmenu}>
                                    {close => (
                                        <div className="modal">
                                            <section className="bg-gray-50 dark:bg-gray-900">
                                                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                                                    <div className="w-full bg-tpurp rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                                            <h1 className="text-xl font-bold leading-tight tracking-tight text-bwhite md:text-2xl dark:text-white">
                                                                Log into your account
                                                            </h1>
                                                            <form className="space-y-4 md:space-y-6" action="#">
                                                                <div>
                                                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-bwhite dark:text-white">Your username</label>
                                                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required=""/>
                                                                </div>
                                                                <div>
                                                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-bwhite dark:text-white">Password</label>
                                                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                                                </div>
                                                                <div className="flex items-center justify-between">
                                                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-dpurp">Forgot password?</a>
                                                                </div>
                                                                <button type="button" className="w-full text-bwhite bg-mpurp hover:bg-dpurp focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={captura}>Log in</button>
                                                                <p className="text-sm font-light text-gray-500 dark:text-bwhite">
                                                                    Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-dpurp">Sign up</a>
                                                                </p>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    )}
                                </Popup>
                                <Popup trigger={<li><a href="#"  onMouseEnter={openSubmenu} onMouseLeave={toggleSubmenu} className='block px-4 py-3 bg-mpurp text-bwhite'>Sign in</a></li>} modal nested>
                                    {close => (
                                        <div className="modal">
                                            <section className="bg-gray-50 dark:bg-gray-900">
                                                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                                                    <div className="w-full bg-tpurp rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                                            <h1 className="text-xl font-bold leading-tight tracking-tight text-bwhite md:text-2xl dark:text-white">
                                                                Sign in your account
                                                            </h1>
                                                            <form className="space-y-4 md:space-y-6" action="#">
                                                                <div>
                                                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-bwhite dark:text-white">Your username</label>
                                                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required=""/>
                                                                </div>
                                                                <div>
                                                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-bwhite dark:text-white">Password</label>
                                                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                                                </div>
                                                                <button type="button" className="w-full text-bwhite bg-mpurp hover:bg-dpurp focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={captura}>Sign in</button>
                                                                <p className="text-sm font-light text-gray-500 dark:text-bwhite">
                                                                </p>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    )}
                                </Popup>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}