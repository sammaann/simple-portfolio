// import Myphoto from "./assets/hacker.jpg"
import Button from "./Button";
const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col space-y-4">
      <img
        className="h-52 w-52 border-blue-700 rounded-full"
        src="src/assets/elonbhai.jpg"
        alt="Elon"
      />

      <p className="font-extrabold text-4xl">Hey, I'm Samman</p>
      <p className="font-extrabold text-xl "> ChatGPT Hacker</p>
      <p className="font-serif font-semibold text-black text-lg w-2/3 border text-justify">
      As a ChatGPT hacker, my role involves exploring and understanding the intricacies of conversational AI systems to enhance their security and functionality. My expertise lies in identifying potential vulnerabilities and weaknesses within these systems, ensuring they are robust against malicious threats. By applying ethical hacking practices, I contribute to improving the safety and reliability of AI interactions, ensuring they remain safe, efficient, and user-friendly.
      </p>
      <div className=" flex gap-6 mt-5">
        <Button title="Contact Me" type="orange" icon="contact" />

        <Button title="My Projects" type="blue" icon="github" />
      </div>
    </div>
  );
};

export default Hero;

