import { MdCheck } from 'react-icons/md';

export default function Hero() {
  return (
    <main>
      <section className="max-container flex p-8 items-center justify-around gap-20">
        <div>
          <h1 className="text-white text-6xl font-semibold mb-8 w-[680px]">
            Turn your <span className="text-third"> tests</span>
            <br />
            into success stories
          </h1>
          <p className="text-white text-xl tracking-wider mb-8">
            AI-Powered skills and knowledge assessment software,
            <br />
            serving 2.5M+ business and educationl users worldwide.
          </p>
          <a href="/signup">
            <button className="text-primary bg-secondary font-medium px-5 py-3 rounded-lg mb-8 hover:bg-secondary-2 hover:border-transparent hover:text-primary">
              Sign up - It&apos;s free
            </button>
          </a>
          <span className="flex text-white items-center">
            <MdCheck size={24} className="text-third mr-4" />
            No credit card required
          </span>
        </div>
        <div>
          <img
            src="/dashboard.svg"
            alt="Dashboard Software Product by Testportal Company"
            width={1200}
          />
        </div>
      </section>
    </main>
  );
}
