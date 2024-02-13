import Button from "../Button";

const NAV_PAGE = [
  {
    link: 'Product',
    direct: 'product',
  },
  {
    link: "Who it's for",
    direct: 'who-it-is-for',
  },
  {
    link: 'Use cases',
    direct: 'use-cases',
  },
  {
    link: 'Pricing',
    direct: 'pricing',
  },
  {
    link: 'Resources',
    direct: 'resources',
  },
];

export default function Header() {
  return (
    <>
      <header className="w-screen">
        <div className="max-container w-screen flex p-8 items-center justify-between">
          <div className="flex items-center gap-12">
            <a href="/" className="mr-12">
              <img
                src="/testportal-logo.svg"
                alt="Testportal Logo"
                width={220}
                height={220}
              />
            </a>
            <div>
              <div className="flex text-lg font-medium gap-12 text-white">
                {NAV_PAGE.map(page => (
                  <a
                    key={page.link}
                    href={page.direct}
                    className="hover:text-secondary"
                  >
                    {page.link}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-6 ml-8">
            <a href="/login">
              <Button href={'login'} className="px-5 py-2 rounded-lg border-3 hover:bg-secondary hover:text-primary hover:font-semibold hover:border-transparent text-white font-medium border-black border-opacity-20">
                Login
              </Button>
            </a>
            <a href="/signup">
              <Button href={'sign-up'} className="px-5 py-2 rounded-lg  border-3 hover:bg-secondary-2 hover:border-transparent hover:text-primary text-primary font-semibold border-secondary bg-secondary">
                Sign up
              </Button>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
