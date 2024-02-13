export default function Featured() {
  return (
    <>
      <section className="bg-white w-screen p-4">
        <div className="max-container p-8 text-center mt-24 mb-24">
          <div className="flex flex-col items-center gap-16">
            <div>
              <h2 className="text-5xl text-primary font-bold mb-7">
                Create online{' '}
                <span className="underline underline-offset-11 decoration-primary decoration-3">
                  tests
                </span>
                ,
                <span className="pl-1 pr-1 underline underline-offset-[10.6px] decoration-primary decoration-3">
                  quizzes
                </span>
                and{' '}
                <span className="underline underline-offset-11 decoration-primary decoration-3">
                  exams
                </span>
              </h2>
              <p className=" text-lg">
                We helped these great brands write their success stores. Join
                them now. <br />
                Choose professional online assessment tool.
              </p>
            </div>
            <div className="flex gap-36">
              <img
                src="/hard_rock_cafe.svg"
                alt="Hard Rock"
                width={140}
                height={140}
              />
              <img
                src="/liqui-moly-1.svg"
                alt="Liqui"
                width={140}
                height={140}
              />
              <img
                src="/panasonic.svg"
                alt="Panasonic"
                width={140}
                height={140}
              />
              <img
                src="/electrolux.svg"
                alt="Electrolux"
                width={140}
                height={140}
              />
              <img src="/dhl-logo.svg" alt="DHL" width={140} height={140} />
              <img src="/sega.svg" alt="Sega" width={140} height={140} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
