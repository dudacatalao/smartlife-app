import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import SideBar from "../components/SideBar";

const navigation = [
	{ name: "Página Inicial", href: "/" },
	{ name: "Bem Estar", href: "/bemestar" },
	{ name: "Qualidade de Vida", href: "/qualidadedevida" },
];

export default function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isCloseIconShown, setIsCloseIconShown] = useState(false);

	const handleMobileMenuToggle = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
		setIsCloseIconShown(!isCloseIconShown);
	};

	return (
		<div className="bg-background">
			<header className="inset-x-0 top-0 inset-x-0 top-0  bg-white shadow-md absolute">
				<nav
					className="flex items-center justify-between p-6 lg:px-8 z-50"
					aria-label="Global"
				>
					<div className="flex lg:flex-1">
						<div className="lg:hidden">
							{!isCloseIconShown ? (
								<button
									type="button"
									className="inline-flex items-center justify-center rounded-md  text-gray-700"
									onClick={handleMobileMenuToggle}
								>
									<span className="sr-only">Open main menu</span>
									<Bars3Icon className="h-6 w-6" aria-hidden="true" />
								</button>
							) : (
								<button
									type="button"
									className="inline-flex items-center justify-center rounded-md  text-gray-700"
									onClick={handleMobileMenuToggle}
								>
									<span className="sr-only">Close main menu</span>
									<svg
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										height="22"
										viewBox="0 -960 960 960"
										width="22"
										className="pb-2"
									>
										<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
									</svg>
								</button>
							)}
						</div>
					</div>

					<div className="hidden lg:flex lg:gap-x-12 ">
						{navigation.map((item) => (
							<NavLink
								key={item.name}
								to={item.href}
								className="text-sm font-semibold leading-6 text-gray-900 hover:text-green1"
							>
								{item.name}
							</NavLink>
						))}
					</div>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
				</nav>
			</header>
			{isMobileMenuOpen && <SideBar />}
		</div>
	);
}
