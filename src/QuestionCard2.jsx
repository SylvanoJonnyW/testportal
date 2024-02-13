export default function QuestionCard2() {
  return (
    <>
      <section className="bg-white opacity-60 rounded-xl w-[420px]">
        <div className="flex flex-col gap-6 p-6">
          <div className="w-full object-contain">
            <img
              src="/card2.jpg"
              alt="Pizza"
              className="object-cover rounded-lg object-right"
            />
          </div>
          <h3 className="text-primary font-bold">Question 2</h3>
          <p>
            What is the radius of a circle that has 
            <br />
            a circumference of 31.4 meters?
          </p>
          <div>
            <div className="p-6 border-2 rounded-lg">
              <p className="text-primary font-semibold">
                Circumference of a circle = 2πr
                <br />
                Given, circumference = 31.4 m.
                <br />
                Therefore, r = 0.5m.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
