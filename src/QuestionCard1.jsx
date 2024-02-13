export default function QuestionCard1() {
  return (
    <>
      <section className="bg-white rounded-xl w-[420px]">
        <div className="flex flex-col gap-6 p-6">
          <div className="w-full object-contain">
            <img
              src="/pizza.jpg"
              alt="Pizza"
              className="object-cover rounded-lg"
            />
          </div>
          <h3 className="text-primary font-bold">Question 1</h3>
          <p>
            What type of pizza is presented
            <br />
            on the image?
          </p>
          <div>
            <ul className="flex flex-col gap-4">
              <li>
                <span className="flex items-center gap-4 text-[#00D186] font-semibold">
                  <img src="/answer-btn.svg" alt="Check Button" />
                  Margherita
                </span>
              </li>
              <li>
                <span className="flex items-center gap-4">
                  <img src="/answer-blank-btn.svg" alt="Check Button" />
                  Pepperoni
                </span>
              </li>
              <li>
                <span className="flex items-center gap-4">
                  <img src="/answer-blank-btn.svg" alt="Check Button" />
                  Hawaii
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
