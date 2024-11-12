"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { WavyBackground } from "@/components/ui/wavy-background";
// import './Scroller.css';

const content = [
  {
    title: "Rajasthan Police Hackathon 1.0 Winner",
    description:
      "Led a real-time collaboration with a team to develop an AI-powered Computer Vision solution focused on national security and public safety. Our platform quickly gained traction through effective teamwork, seamless document sharing, and rapid decision-making. This project showcases my ability to collaborate under pressure and deliver innovative solutions that address real-world challenges.",
    image: '/images/1.jpg'
  },
  {
    title: "Gujrat Vibrant India Hackathon Semi Finalist",
    description:
      "Collaborated with a team to create an AI-based Ayurvedic Medicine Recognition and Recommendation system tailored for pharmacies, Ayurvedic students, and patients. Our solution helps identify and recommend traditional medicines, bridging the gap between modern technology and ancient healing practices. This project highlights my skills in AI development and my passion for using technology to improve healthcare.",
    image: '/images/2.jpg'
  },
  {
    title: "Event Manager at SuperAI Connect",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions. Experience real-time updates and never stress about version control again.",
    image: '/images/3.jpg'
  },
];

function Extraco() {

  return (
    <div className="bg-black-500">
      
      <div>
        <WavyBackground className="max-w-4xl mx-auto pb-40">
          <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
            Extra and Co-curricular
          </p>
          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
            Awesomeness inside and outside the books
          </p>
        </WavyBackground>
      </div>
      <div>
        <StickyScroll contentClassName="bg-slate-900" content={content} />
      </div>
    </div>
  );
}

export default Extraco;
