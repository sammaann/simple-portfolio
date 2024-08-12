import Button from "./Button";
import myphoto from "./assets/portfolio.webp";
const Hero = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-3 text-white ">
      <img
        src={myphoto}
        className="h-52 w-52 border-blue-700 rounded-full"
        alt="Elon"
      />
     <p className="font-semibold text-4xl">Hey, I'm Samman</p>
      <p className="font-semibold text-xl "> ChatGPT Hacker</p>
      <p className="font-serif font-semibold text-black text-lg w-2/3 text-justify">
        As a ChatGPT hacker, my role involves exploring and understanding the
        intricacies of conversational AI systems to enhance their security and
        functionality. My expertise lies in identifying potential
        vulnerabilities and weaknesses within these systems, ensuring they are
        robust against malicious threats. By applying ethical hacking practices,
        I contribute to improving the safety and reliability of AI interactions,
        ensuring they remain safe, efficient, and user-friendly.
      </p>
      <div className="flex gap-4  ">
        <div className=" flex justify-center py-9 space-x-7">
          <Button title="Contact Me" type="orange" icon="contact" />
          <Button title="My Projects" type="blue" icon="github" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
