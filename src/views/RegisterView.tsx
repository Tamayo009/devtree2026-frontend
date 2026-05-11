import { Link } from "react-router-dom";

export default function RegisterView() {
    return (
        <>
            <h1 className="text-4xl font-bold text-white">Crear Cuenta</h1>
            <nav className="mt-10">
                <Link
                    className="text-center text-white text-lg block"
                    to="/auth/login"
                >¿Ya tienes cuenta? inicia sesión aquí...</Link>
            </nav>
        </>
    )
}