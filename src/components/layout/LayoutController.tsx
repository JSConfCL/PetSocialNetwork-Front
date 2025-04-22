"use client";

import { usePathname } from "next/navigation";

import { Header, Menu } from "@/components";
import { FadeContent } from "@/components/";


export function LayoutController({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const isAuthPage = pathname.startsWith("/auth");

	if (isAuthPage) {
		return (
			<FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0}>

				<main className="mx-auto flex justify-center items-center h-screen w-full">
					{children}
				</main>
			</FadeContent>
		);
	}

return (
	<>
		<Header />

		<div className="container mx-auto p-4">
			<div className="flex flex-col lg:flex-row gap-6">
				<Menu />

				<main className="flex-1 lg:flex lg:justify-center">
					<div className="w-full lg:max-w-full">
						{children}
					</div>
				</main>
			</div>
		</div>
	</>
	);
}