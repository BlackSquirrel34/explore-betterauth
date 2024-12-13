"use client";

import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import SignOutButton from "@/src/components/signout-button";
// import Session type from auth.ts
import { Session } from "@/auth";


export default function Navbar({ session }: { session: Session }) {
	return (
		<nav className="flex justify-between items-center py-3 px-4 fixed top-0 left-0 right-0 z-50 bg-slate-100">
			<Link href="/" className="text-xl font-bold">
				better-auth
			</Link>
			{!session ? (
            <div className="flex gap-2 jusitfy-center">
				<Link href="/sign-in" className="text-xl font-bold">
					<Button variant="default">Sign In</Button>
				</Link>
				<Link href="/sign-up" className="text-xl font-bold">
					<Button variant="default">Sign Up</Button>
				</Link>
            </div>
			) : (
				<div className="flex items-center gap-2">
					<SignOutButton />
				</div>
			)}	
		</nav>
	);
}