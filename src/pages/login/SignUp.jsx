
import { useState } from 'react'; 
export default function LoginPag() {
    const nombres = ['Juan', 'María', 'Pedro', 'Jose'];
    const [showNegacion, setShowNegacion] = useState(false);
    const [showNegacionC, setShowNegacionC] = useState(false);

    const captura = () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (nombres.includes(email)) {
            console.log('El nombre ya está en la lista');
            setShowNegacion(true);
        } else {
            console.log('El nombre no está en la lista');
            setShowNegacion(false);
        }

        if (password.length<5) {
            console.log('La contraseña no es valida');
            setShowNegacionC(true);
        } else {
            console.log('La contraseña es valida');
            setShowNegacionC(false);
        }

        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
    <>
        <section className="bg-gray-50 dark:bg-dpurp">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-tpurp rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-bwhite md:text-2xl dark:text-white">
                           Crea tu Cuenta
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-bwhite dark:text-white">Your username 
                                <a className={`${showNegacion ? 'block' : 'hidden'} text-dpurp `}>Este username ya esta registrado</a>
                                </label>                                
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required=""/>
                            </div>
                            <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-bwhite dark:text-white">Password
                                <a className={`${showNegacionC ? 'block' : 'hidden'} text-dpurp `}>Esta contraseña no es valida</a>
                                </label>
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
    </>
    );
}