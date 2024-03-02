import Link from "next/link";
import Socials from "./Socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString("default", { month: "long" });

  return (
    <footer className="py-12 bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
          />
          {/* copyright */}
          <div className="text-muted-foreground">
            {currentMonth} - {currentYear} | nocopyright |{" "}
            <Link
              href="/absolute mb-8 text-sm font-medium capitalize top-2 right-12 "
              target="_blank"
              className="capitalize transition-all duration-200 underline-offset-8 hover:text-primary "
            >
              Tushar upadhyay.
            </Link>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
