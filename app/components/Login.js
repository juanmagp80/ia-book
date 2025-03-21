'use client';

import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc'; // Icono de Google
import { FaFacebook, FaEnvelope, FaKey } from 'react-icons/fa'; // Iconos de Facebook, Email y Contraseña

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);
  const [message, setMessage] = useState('');

  const handleMagicLinkLogin = () => {
    if (!email) {
      setMessage('Por favor, ingresa tu correo electrónico.');
      return;
    }
    setMessage(`Se ha enviado un enlace mágico a ${email}.`);
  };

  const handlePasswordLogin = () => {
    if (!email || !password) {
      setMessage('Por favor, completa todos los campos.');
      return;
    }
    setMessage(`Iniciando sesión con ${email}...`);
    // Aquí iría la lógica real de autenticación con contraseña.
  };

  const handleGoogleLogin = () => {
    setMessage('Iniciando sesión con Google...');
    // Aquí iría la lógica real de autenticación con Google.
  };

  const handleFacebookLogin = () => {
    setMessage('Iniciando sesión con Facebook...');
    // Aquí iría la lógica real de autenticación con Facebook.
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Iniciar Sesión
        </h2>

        {/* Mensaje de estado */}
        {message && (
          <p className="text-sm text-center mb-4 text-green-600">{message}</p>
        )}

        {/* Botón de inicio de sesión con enlace mágico */}
        <button
          onClick={handleMagicLinkLogin}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 mb-4 flex items-center justify-center"
        >
          <FaEnvelope className="mr-2" />
          Iniciar sesión con enlace mágico
        </button>

        {/* Botón de inicio de sesión con Google */}
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-white text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300 mb-4 flex items-center justify-center border border-gray-300"
        >
          <FcGoogle className="mr-2 text-xl" />
          Iniciar sesión con Google
        </button>

        {/* Botón de inicio de sesión con Facebook */}
        <button
          onClick={handleFacebookLogin}
          className="w-full bg-blue-800 text-white py-3 px-6 rounded-lg hover:bg-blue-900 transition duration-300 mb-6 flex items-center justify-center"
        >
          <FaFacebook className="mr-2" />
          Iniciar sesión con Facebook
        </button>

        {/* Nota sobre privacidad */}
        <p className="text-sm text-gray-600 text-center mb-6">
          Podemos contactarte para obtener comentarios o con noticias sobre el servicio, pero nunca compartiremos tu correo electrónico con nadie.
        </p>

        {/* Opción para iniciar sesión con contraseña */}
        <div className="text-center">
          <p className="text-gray-600 mb-2">
            ¿Tienes problemas para iniciar sesión con los métodos sin contraseña?
          </p>
          <button
            onClick={() => setShowPasswordLogin(!showPasswordLogin)}
            className="text-blue-600 hover:text-blue-700 transition duration-300 flex items-center justify-center"
          >
            <FaKey className="mr-2" />
            Iniciar sesión con contraseña
          </button>
        </div>

        {/* Formulario de inicio de sesión con contraseña */}
        {showPasswordLogin && (
          <div className="mt-4">
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 mb-4"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 mb-4"
            />
            <button
              onClick={handlePasswordLogin}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Iniciar sesión
            </button>
          </div>
        )}
      </div>
    </div>
  );
}