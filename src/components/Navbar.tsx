import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ConnectButton } from "thirdweb/react";
import { client } from "@/config/thirdwebClient";

export default function Navbar() {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} width={40} height={40} alt="0xCV logo" />
          <span className="text-xl font-bold tracking-tight">0xCV</span>
        </Link>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/jobs/new">Post a job</Link>
          </Button>
          <ConnectButton
            client={client}
            theme="dark"
            connectButton={{
              label: "Connect Wallet",
            }}
          />
        </div>
      </nav>
    </header>
  );
}
