"use client";
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
    <div className="mx-auto max-w-2xl rounded-lg p-6 shadow-md">
      <h1 className="mb-4 text-2xl font-bold text-purple-800">Configuración de Privacidad</h1>
      <p className="mb-6 text-purple-600">Ajusta tus preferencias de privacidad a continuación:</p>

      <div className="mb-4">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={(e) => setEmailNotifications(e.target.checked)}
            className="h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
          />
          <span className="text-purple-700">Habilitar notificaciones por correo</span>
        </label>
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-medium text-purple-700">Visibilidad del perfil:</label>
        <select
          value={profileVisibility}
          onChange={(e) => setProfileVisibility(e.target.value)}
          className="block w-full rounded-md border border-purple-500 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
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
            className="h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
          />
          <span className="text-purple-700">Mostrar mi estado de actividad</span>
        </label>
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-medium text-purple-700">Quién puede enviarme mensajes directos:</label>
        <select
          value={directMessages}
          onChange={(e) => setDirectMessages(e.target.value)}
          className="block w-full rounded-md border border-purple-500 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
        >
          <option value="everyone">Todos</option>
          <option value="friends">Solo amigos</option>
          <option value="noone">Nadie</option>
        </select>
      </div>

      <div className="mt-6">
        <button
          onClick={handleSave}
          className="w-full rounded-md border border-purple-700 bg-purple-600 px-4 py-2 text-purple-700 shadow hover:bg-purple-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:bg-purple-500 dark:text-white dark:hover:bg-purple-600 dark:focus:ring-purple-400"
        >
          Guardar cambios
        </button>
      </div>
    </div>
  );
}
