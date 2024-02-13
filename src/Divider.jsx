export default function Divider() {
  return (
    <>
      <section className="bg-white pt-32 w-screen">
        <div className="flex flex-col gap-48 second-container">
          <div className="flex justify-between">
            <div className="flex flex-col gap-8 pl-28">
              <h3 className="flex gap-4 text-primary font-bold text-5xl ">
                Let&apos;s save trees together{' '}
                <img src="/leaf.svg" alt="" width={36} />
              </h3>
              <p className="w-[560px] text-primary text-xl text-opacity-70">
                Choose online assessments with Testportal and reduce your
                ecological footprint. Help us save trees and water for future
                generations
              </p>
            </div>
            <div className="pr-28">
              <div className=" flex gap-8 justify-center items-center">
                <div className="font-semibold text-primary text-xl flex flex-col gap-6">
                  <p>Number of answers given:</p>
                  <p>Avg. number of questions per sheet:</p>
                  <p>Sheets from one tree:</p>
                </div>
                <div>
                  <div className="flex flex-col justify-between gap-6 font-semibold text-primary text-xl">
                    <p className="border-b-2">1,037,041,709</p>
                    <p className="border-b-2">5</p>
                    <p className="border-b-2">8,000</p>
                  </div>
                </div>
                <div>
                  <p className=" text-4xl text-primary ">=</p>
                </div>
                <div>
                  <p className="text-primary text-xl font-semibold">
                    Trees saved
                  </p>
                  <p className="text-primary text-3xl font-bold">25,926</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src="/trees.svg" alt="" className="object-contain" />
          </div>
        </div>
      </section>
    </>
  );
}
