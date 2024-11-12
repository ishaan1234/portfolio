import LampDemo from "@/components/ui/lamp"; // Adjust the path if necessary
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Projects() {
  return (
    <div className="bg-slate-950">
      <LampDemo/>
      <HoverEffect 
      items={[
        { title: "AI for Intelligent Cameras", 
          description: [
          "Real-time image processing",
          "AI-driven object detection",
          "Edge computing for faster responses",
          "Cloud integration for enhanced analytics",
        ], link: "https://github.com/ishaan1234/RJPOLICE_HACK_238_PIXASHIELD_3", image:  "/images/ai_for_ic.png"},
        { title: "Statsense: AutoML and AutoEDA Application", 
          description: [
          "Just upload your dataset and get insights",
          "Autodetectes features and does tabular preprocessing",
          "Option to apply ML models and get predictions",
          "Useful for quick insights and experimentations",
        ], link: "https://youtu.be/dp9vCFOjlms?si=b8fKdhUnrA3prZdV", image:  "/images/statsense.png"},
        { title: "Satellite Image Dehazing", 
          description: [
          "Just upload your hazy Satellite Image",
          "The GAN model will create a dehazed image",
          "Useful for processing of remote sensing images",
          ], link: "https://dehazingapp.streamlit.app/", image:  "/images/dehazing.png"}
      ]}/>
    </div>
  );
}
