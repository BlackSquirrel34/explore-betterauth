import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export default async function Navbar() {
	return (
		<nav className="flex justify-between items-center py-3 px-4 fixed top-0 left-0 right-0 z-50 bg-slate-100">
			<Link href="/" className="text-xl font-bold">
				better-auth
			</Link>
            <div className="flex gap-2 jusitfy-center">
            <Link href="/sign-in" className="text-xl font-bold">
				<Button variant="default">Sign In</Button>
			</Link>
            <Link href="/sign-up" className="text-xl font-bold">
				<Button variant="default">Sign Up</Button>
			</Link>
            </div>
			
		</nav>
	);
}