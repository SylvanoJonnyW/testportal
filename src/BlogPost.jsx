import { blogpost, anotherBlogPost } from './blog-post';
import { GoArrowRight } from 'react-icons/go';
import Button from './Button';

export default function BlogPost() {
  return (
    <>
      <section className="bg-white w-screen">
        <div className="max-container">
          <h3 className="text-primary text-3xl font-bold mb-12">Our blog</h3>
          <div className="flex gap-8 justify-between">
            {blogpost.map(post => (
              <div
                key={post.title}
                className="flex flex-col gap-6 justify-evenly w-[560px]"
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="rounded-lg object-contain"
                  width={520}
                />
                <div className="p-2 border-2 border-fourth rounded-lg w-fit">
                  <p className="text-lg text-primary font-semibold">
                    {post.category}
                  </p>
                </div>
                <p className="text-primary text-2xl font-semibold ">
                  {post.title}
                </p>
                <div className="flex text-gray-400 gap-4">
                  <div>
                    <p>{post.date}</p>
                  </div>
                  <div>|</div>
                  <div>
                    <p>{post.minuteRead}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-24 pb-24">
            <div className="flex justify-between border-2 rounded-lg items-center">
              <div className="px-8 py-8">
                {anotherBlogPost.map(post => (
                  <div key={post.title} className="flex flex-col gap-4">
                    <div className="p-2 border-2 border-fourth rounded-lg w-fit">
                      <p className="text-primary font-semibold">
                        {post.category}
                      </p>
                    </div>
                    <p className="text-primary font-semibold text-4xl">
                      {post.title}
                    </p>
                    <div className="flex flex-col text-gray-400 gap-6">
                      <div className="w-[520px]">
                        <p className="text-lg text-black opacity-70">
                          {post.desription}
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <div>
                          <p>{post.date}</p>
                        </div>
                        <div>|</div>
                        <div>
                          <p>{post.minuteRead}</p>
                        </div>
                      </div>
                      <div className="flex">
                        <a href={post.direct}>
                          <span className="flex gap-2 text-primary font-semibold">
                            <p>Read more</p>
                            <GoArrowRight size={24} />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <img
                  src="/blog4.svg"
                  alt="Beter service quality with online tests at DHL blog"
                  width={720}
                  className=" rounded-tr-lg rounded-br-lg object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center pb- pb-32">
            <div>
              <h3
                className="text-4xl h-16 w-[540px] font-bold text-primary"
                style={{ marginBottom: '-10px' }}
              >
                Secrets, strategies and success
              </h3>
              <h3
                className="text-4xl h-16 w-[540px] font-bold text-primary"
                style={{ paddingLeft: '98px', marginTop: '0' }}
              >
                stories on our blog
              </h3>
            </div>
            <div>
              <Button href={'more-articles'} className="text-primary font-semibold px-4 py-2 rounded-lg border-3 border-fourth w-fit">
                See more articles
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
