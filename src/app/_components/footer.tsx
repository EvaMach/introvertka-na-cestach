import Container from "@/app/_components/container";
import Link from "next/link";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
    <path
      fill="#fefce8"
      d="M5.8 0h8.4C17.4 0 20 2.6 20 5.8v8.4a5.8 5.8 0 0 1-5.8 5.8H5.8C2.6 20 0 17.4 0 14.2V5.8A5.8 5.8 0 0 1 5.8 0Zm-.2 2A3.6 3.6 0 0 0 2 5.6v8.8C2 16.39 3.61 18 5.6 18h8.8a3.6 3.6 0 0 0 3.6-3.6V5.6C18 3.61 16.39 2 14.4 2H5.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM10 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
    />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-title">
      <Container>
        <div className="py-4 flex text-yellow-50 flex-col lg:flex-row items-center">
          <p className="text-sm flex-1 lg:text-md font-semibold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            ©2025 s nadšením a kafem v ruce, introvertka Eva.
          </p>
          <Link href="https://www.instagram.com/introvertkanacestach">
            <InstagramIcon />
          </Link>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
