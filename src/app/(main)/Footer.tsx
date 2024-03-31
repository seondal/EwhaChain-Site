import Contact from "@/constants/Contact";
import Image from "next/image";
import Link from "next/link";

interface ContactButtonI {
  icon: string;
  link: string;
}
function ContactButton({ icon, link }: ContactButtonI) {
  return (
    <Link href={link}>
      <div className="p-2 bg-white/10 rounded-full relative w-8 h-8">
        <Image src={icon} alt="" width={16} height={16} />
      </div>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="flex justify-between p-8 bg-footer text-white text-xs leading-5">
      <div>
        <b className="text-xl">EWHA-CHAIN</b>
        <div>이화여자대학교 블록체인 학회</div>
        <div>Ewha Womans University Blockchain Academic Club</div>
        <div>Copyright © 2020 Landify UI Kit.</div>
        <div>All rights reserved</div>
      </div>
      <div className="text-right">
        <b className="text-base">Contact</b>
        <div>ewha.chain@gmail.com</div>
        <div className="flex justify-between py-5">
          <ContactButton icon={""} link={Contact.email} />
          <ContactButton icon={"/icon/twitter.svg"} link={Contact.twitter} />
          <ContactButton
            icon={"/icon/instagram.svg"}
            link={Contact.instagram}
          />
        </div>
      </div>
    </footer>
  );
}
