import {useNavigate} from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home');
    }
    return (
        <main className="login">
            <h1 className="text-center text-white mb-4">Booroad Dashboard Login</h1>
            <div className="login-container">

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label text-white">Utente</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Inserisci il tuo username"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label text-white">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Inserisci la password"
                            required
                        />
                    </div>

                    <button type="submit"  className="btn btn-light w-100">
                        Entra
                    </button>
                </form>
            </div>
        </main>
    );
}
