import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-4 flex flex-col lg:flex-row items-center">
          <p className="text-sm lg:text-md font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Made with love and coffee by yours truly.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
