export default function UserTestimonial() {
  return (
    <>
      <section className="bg-white pt-28 pb-32 ">
        <div className="bg-secondary max-container px-12 py-12 rounded-xl">
          <div className="flex gap-28 justify-between">
            <div>
              <h3 className="text-4xl w-[480px] font-bold text-primary">What our users say</h3>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <div className="p-2 bg-[#F4DA80] w-fit rounded-lg">
                  <p className=" font-semibold text-lg text-primary">Business</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-primary">DHL</p>
              <div>
                <p className="w-[880px] text-xl font-normal">
                  Our company has been assessing the knowledge of our employees and delivery persons to guarantee professional customer service. Testportal proved to be a great platform to support this undertaking. We received a clear and simple test-creation interface that allows complete control over our assessments. The ability to upload a database is also very helpful, as it saves us a lot of work. The platform makes the test easily accessible for the respondents. During the assessment, we can minitor who has finished already and what their score was. After the test, we receive statistics that are very helpful in data analysis and drawing conclusions about the level of knowledge of our employees. We wholeheartedly recommend Testportal to everyone who would like to assess the knowledge of their students and employees in small and large enterprises.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary">Hirek Chmielowiec</h3>
              </div>
              <p className="text-primary">OPS Trainer</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
