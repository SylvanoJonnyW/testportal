export default function ProductCard() {
  return (
    <>
      <section className="bg-white pb-36">
        <div className="max-container bg-primary rounded-xl pt-4">
          <div className="flex">
            <div className="bg-white rounded-bl-none py-6 rounded-xl w-[1280px] rounded-tl-none rounded-tr-xl rounded-br-none ">
              <div className="flex gap-24">
                <div className="p-6">
                  <h3 className="text-5xl text-primary font-bold pb-16 w-[440px]">
                    There is a better way to test
                  </h3>
                  <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-2">
                      <img src="/triangle.svg" alt="Triangle" />
                      <span className="text-primary font-bold text-lg">
                        AI-Powered Question Generator
                      </span>
                    </li>
                    <div className=" indent-4 flex flex-col gap-4 text-gray-500 text-lg">
                      <li>Feedback</li>
                      <li>Automatic Grading</li>
                      <li>Comprehensive Insights and Analytics</li>
                      <li>Remote Assessments</li>
                      <li>Easy to Archive</li>
                      <li>Eco-friendly</li>
                    </div>
                  </ul>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex flex-col gap-6 w-[420px]">
                    <div>
                      <img src="/problem.svg" alt="Graphic of Problem" />
                    </div>
                    <p className="text-primary font-bold text-xl">Problem</p>
                    <p className=" text-xl font-light">
                      Creating detailed and insightful questions takes a lot of
                      time. Especially in the case of ever-popular, choice
                      question-based online and on-site assessments. Could there
                      be a solution that would save time and produce reliable
                      content?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col justify-center px-28">
              <div className="flex flex-col gap-6 w-[420px]">
                <div>
                  <img src="/solution.svg" alt="Graphic of Solution" />
                </div>
                <p className="text-third font-bold text-2xl">Solution</p>
                <p className="text-white font-light text-xl">
                  Let Testportal AI create questions for you! All you have to do
                  is provide our platform with your materials or select a topic!
                  Watch AI generate questions in seconds. Once they&apos;re
                  ready, simply review the questions and you&apos;re all set!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
