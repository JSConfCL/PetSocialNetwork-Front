"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Button from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Login submitted:", formData);

    router.push("/");
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-4xl overflow-hidden rounded-xl shadow-2xl shadow-purple-200 dark:shadow-purple-900">
        {/* Sección de imagen */}
        <div className="relative hidden md:block md:w-1/2 bg-purple-600">
					<div className="absolute inset-0 bg-purple-600 opacity-90"></div>

					<div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white z-10">
						<h2 className="text-3xl font-bold mb-4 text-center">Bienvenido de nuevo Humano</h2>
						<p className="text-center mb-6">Conecta con la comunidad de mascotas más grande</p>

						<div className="w-32 h-32 relative mb-4">
							<div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
							<div className="absolute inset-2 rounded-full bg-white/30"></div>
							<div className="absolute inset-0 flex items-center justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M10 16.5l-1.5-1.5M7 10l-2-2M7 14l-2 2M10 7.5l-1.5 1.5M14 10l2-2M14 14l2 2M10 10l4 4M14 10l-4 4"></path>
								</svg>
							</div>
						</div>
						<p className="text-sm opacity-80">Tu red social para mascotas favorita</p>
					</div>
        </div>

        {/* Sección de formulario */}
        <Card className="md:w-1/2 border-0 shadow-none">
					<CardHeader className="text-center pt-8">
						<CardTitle className="text-2xl font-bold text-purple-600">
							Iniciar Sesión
						</CardTitle>

						<CardDescription>
							Ingresa tus credenciales para acceder a tu cuenta
						</CardDescription>
					</CardHeader>

					<form onSubmit={handleSubmit}>
						<CardContent className="space-y-4 px-8">
							<div className="space-y-2">
								<label htmlFor="email" className="text-sm font-medium">
									Correo electrónico
								</label>

								<Input
									id="email"
									name="email"
									type="email"
									placeholder="tu@ejemplo.com"
									value={formData.email}
									onChange={handleChange}
									required
									className="border-purple-200 focus-visible:ring-purple-400"
								/>
							</div>

							<div className="space-y-2">
								<div className="flex items-center justify-between">
									<label htmlFor="password" className="text-sm font-medium">
										Contraseña
									</label>

									<Link href="/auth/reset-password" className="text-xs text-purple-600 hover:underline">
										¿Olvidaste tu contraseña?
									</Link>
								</div>

								<Input
									id="password"
									name="password"
									type="password"
									placeholder="••••••••"
									value={formData.password}
									onChange={handleChange}
									required
									className="border-purple-200 focus-visible:ring-purple-400"
								/>
							</div>

							<div className="flex items-center space-x-2">
								<input
									type="checkbox"
									id="remember"
									className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
								/>

								<label htmlFor="remember" className="text-sm text-gray-600 dark:text-gray-300">
									Recordarme
								</label>
							</div>
						</CardContent>

						<CardFooter className="flex flex-col space-y-4 px-8 pb-8">
							<Button type="submit" className="w-full">
								Iniciar Sesión
							</Button>

							<div className="relative my-2">
								<div className="absolute inset-0 flex items-center">
									<div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
								</div>

								<div className="relative flex justify-center text-xs">
									<span className="bg-card px-2 text-muted-foreground">o continúa con</span>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<button
									type="button"
									className="flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
										<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
										<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
										<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
										<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
									</svg>
									Google
								</button>

								<button
									type="button"
									className="flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
										<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
									</svg>
									Facebook
								</button>
							</div>

							<div className="text-center text-sm mt-4">
								<p>
									¿No tienes una cuenta?{" "}

									<Link href="/auth/register" className="text-purple-600 hover:underline">
										Regístrate
									</Link>
								</p>
							</div>
						</CardFooter>
					</form>
			</Card>
    </div>
	);
}
