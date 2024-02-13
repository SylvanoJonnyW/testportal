import Button from './Button';

export default function Collaboration() {
  return (
    <>
      <section className="bg-secondary w-screen">
        <div className="second-container py-36">
          <div className="flex gap-28 justify-between">
            <div className="flex flex-col gap-8 justify-center pl-28">
              <h3 className="text-6xl text-primary font-bold w-[780px]">
                Testportal and Microsoft Teams. A perfect match.
              </h3>
              <p className="w-[580px] text-xl">
                Combine Tesportal&apos;s unique features with the power of
                Microsoft Teams. Experience the best of both worlds and succeed
                in your online assessments
              </p>
              <div className="flex gap-8">
                <Button
                  className={
                    'bg-primary border-none text-white font-semibold py-3'
                  }
                  href={'add-testportal-to-microsoft-teams'}
                >
                  Add Tesportal to Microsoft Teams
                </Button>
                <Button
                  className={'border-primary font-semibold text-primary'}
                  href={'testportal-microsoft-teams'}
                >
                  Read more
                </Button>
              </div>
            </div>
            <div>
              <img
                src="/testportal-microsoft.png"
                alt="Three colleague discussing on the computer screen"
                width={820}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#E5EBF2] w-screen">
        <div className="second-container py-36">
          <div className="flex gap-28 justify-between">
            <div>
              <img
                src="/enterprise.png"
                alt="A person sitdown looking at the tablet in the office"
                width={820}
              />
            </div>
            <div className="flex flex-col gap-8 justify-center">
              <h3 className="text-6xl text-primary font-bold w-[940px]">
                Enterprise-grade security and data protection
              </h3>
              <p className="text-xl w-[620px]">
                Your respondent&apos;s personal data and assessment results are
                perfectly safe with us. We never access that information, and
                you can easily modify or delete records at any time.
              </p>
              <Button
                className={
                  'border-primary text-primary font-semibold hover:border-opacity-100'
                }
                href={'enterprise-and-protection'}
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
