import { GoArrowRight } from 'react-icons/go';
import { CARD_DATA } from './index';

export default function Products() {
  return (
    <>
      <section className="bg-white w-screen p-2 pb-36">
        <div className="max-container">
          <div className="text-center p-8 mb-8">
            <div className="flex flex-col items-center gap-8">
              <p className="text-primary text-xl opacity-45">
                Skills and knowledge testing made easy
              </p>
              <h3 className="text-5xl text-primary font-bold">
                One assessment platform for all your needs
              </h3>
              <div className="items-center flex gap-6">
                <button className="text-primary font-semibold px-2 py-2 border-3 rounded-lg bg-white hover:bg-primary-2 hover:text-white">
                  Business
                </button>
                <button className="text-primary font-semibold px-2 py-2 border-3 rounded-lg bg-white hover:bg-primary-2 hover:text-white">
                  Education
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-12">
            {CARD_DATA.map(card => (
              <div
                key={card.title}
                className="flex flex-col items-start gap-8 p-8 border-2 rounded-xl"
              >
                <div className="flex mb-1">
                  <img src={card.img} alt={card.title} width={64} height={64} />
                </div>
                <h3 className="text-3xl text-primary font-bold">
                  {card.title}
                </h3>
                <p className=" text-gray-700 font-medium">{card.description}</p>

                <a href={card.direct}>
                  <p className="font-semibold text-primary flex items-center gap-4 cursor-pointer">
                    {card.more}{' '}
                    <span>
                      <GoArrowRight size={24} />{' '}
                    </span>
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
