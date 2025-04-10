'use client'
import { useState } from "react";

export default function PrivacySettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState("public");
  const [activityStatus, setActivityStatus] = useState(true);
  const [directMessages, setDirectMessages] = useState("everyone");

  const handleSave = () => {
    alert("Configuraciones guardadas exitosamente.");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Configuración de Privacidad</h1>
      <p className="text-gray-600 mb-6">Ajusta tus preferencias de privacidad a continuación:</p>


      <div className="mb-4">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={(e) => setEmailNotifications(e.target.checked)}
            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <span className="text-gray-700">Habilitar notificaciones por correo</span>
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Visibilidad del perfil:
        </label>
        <select
          value={profileVisibility}
          onChange={(e) => setProfileVisibility(e.target.value)}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="public">Público</option>
          <option value="private">Privado</option>
          <option value="friends">Solo amigos</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={activityStatus}
            onChange={(e) => setActivityStatus(e.target.checked)}
            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <span className="text-gray-700">Mostrar mi estado de actividad</span>
        </label>
      </div>

      
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Quién puede enviarme mensajes directos:
        </label>
        <select
          value={directMessages}
          onChange={(e) => setDirectMessages(e.target.value)}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="everyone">Todos</option>
          <option value="friends">Solo amigos</option>
          <option value="noone">Nadie</option>
        </select>
      </div>

      <div className="mt-6">
        <button
          onClick={handleSave}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Guardar cambios
        </button>
      </div>
    </div>
  );
}