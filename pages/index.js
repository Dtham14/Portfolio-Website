import Layout from "../components/Layout";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";

export default function Home() {
  return (
    <Layout>
      <section className="text-center p-10 py-20">
        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          Daniel Tham
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
          Software Developer and Educator
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
          AI Software Developer always learning the newest technologies and providing services for all things STEM!
        </p>
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
          <Image src={deved} layout="fill" objectFit="cover" alt="Developer illustration" />
        </div>
      </section>
    </Layout>
  );
}
