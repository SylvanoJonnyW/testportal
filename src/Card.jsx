// eslint-disable-next-line react/prop-types

import Button from './Button';
import QuestionCard1 from './QuestionCard1';
import QuestionCard2 from './QuestionCard2';

export default function Card() {
  return (
    <>
      <section className="bg-white py-12 overflow-hidden pb-16">
        <div className="max-container px-20 py-12 bg-primary rounded-xl overflow-hidden">
          <div className="flex items-center justify-between gap-60">
            <div className="flex flex-col gap-12">
              <div>
                <h3 className="text-white font-bold text-6xl w-[660px]">
                  Create <span className='text-third'>your first</span> online
                  <br />
                  test, quiz or exam
                </h3>
              </div>
              <div className=' w-[580px]'>
                <p className="text-white w-auto">
                  Explore all of Testportal asssessment software features and
                  steamline your online assessments. It&apos;s on the house.
                  You&apos;re welcome.
                </p>
              </div>
              <div>
                <Button
                  className={`bg-secondary text-primary font-semibold border-transparent`}
                  href={'signup'}
                >
                  Sign up free
                </Button>
                ;
              </div>
              <div className="flex gap-8">
                <div>
                  <span className='flex items-center gap-4 text-white font-semibold'>
                    <img src="/check.svg" alt="Checkmark" />
                    Free registration
                  </span>
                </div>
                <div>
                  <span className='flex items-center gap-4 text-white font-semibold'>
                    <img src="/check.svg" alt="Checkmark" />
                    AI-driven feature
                  </span>
                </div>
              </div>
            </div> 
            <div className='flex gap-8 relative'>
                <QuestionCard1 />
                <QuestionCard2 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
