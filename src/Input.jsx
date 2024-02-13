import Button from "./Button";

export default function Input() {
  return (
    <>
      <section className=" bg-bg-Input w-screen p-4">
        <div className="max-container p-8 flex justify-between items-center">
          <div>
            <h3 className="text-3xl mb-4 text-primary font-bold">
              Here to take a test?
            </h3>
            <p className=" text-input">
              No registration required. Enter your access code and start.
            </p>
          </div>
          <form className="flex gap-4">
            <input
              type="text"
              className="p-3 rounded-lg text-input font-semibold w-[520px]"
              placeholder="Enter the access code"
            />
            <Button href={'start-the-test'} className="bg-primary py-2 rounded-lg text-white font-semibold border-transparent hover:bg-primary-2">
              Start your test
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
