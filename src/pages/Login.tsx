import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { STORAGE_KEYS, getStored, setStored } from '../utils/storage';
import { useNavigate, Link } from 'react-router-dom';
import type { User, Session } from '../types';

export default function Login(){
const navigate = useNavigate();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [err, setErr] = useState('');

const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const users = getStored<User[]>(STORAGE_KEYS.USERS, []);
    const found = users.find(u => u.email === email && u.password === password);
    if(!found){ setErr('Credenciales inválidas'); return; }
    setStored<Session>(STORAGE_KEYS.SESSION, { email: found.email });
    navigate('/');
};

const onEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
const onPass = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

return (
    <div className="py-3" style={{maxWidth:480, margin:'0 auto'}}>
    <h2>Iniciar sesión</h2>
    {err && <div className="alert alert-danger">{err}</div>}
    <form onSubmit={submit} className="vstack gap-3">
        <input className="form-control" placeholder="Email" type="email" value={email} onChange={onEmail} required/>
        <input className="form-control" placeholder="Contraseña" type="password" value={password} onChange={onPass} required/>
        <button className="btn btn-neon">Entrar</button>
    </form>
    <p className="mt-3 small text-secondary">¿No tienes cuenta? <Link to="/registro" className="link-neon">Regístrate</Link></p>
    </div>
);
}