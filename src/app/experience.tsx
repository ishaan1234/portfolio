import { Timeline } from "@/components/ui/timeline";

export default function Experience() {
  return (
    <div className="bg-slate-900">
      <Timeline
        data={[
          {
            title: (
              <>
                <sub> Sept 2024 - Oct 2024</sub>
              </>
            ),
            content: <div>
              <ul className="text-2xl font-semibold text-purple-600">Swarmauri (Remote)</ul>
              <ul className="text-xl text-fuchsia-300">Software(LLM) Engineer</ul>
              <ul>• Developed various components for LLM Agents and optimized algorithms for various behaviors, improving overall system efficiency.</ul>
              <ul>• Conducted over 10 tests in simulated and real-world environments, identifying and resolving critical bugs to ensure SDK reliability </ul>  
              <ul>• Reduced codebase size by 30% through optimization, enhancing performance on resource-constrained systems</ul> 
              </div>
          },
          {
            title: (
              <>
               <sub>Oct 2023 - Nov 2023</sub>
              </>
            ),
            content: <div>
              <ul className="text-2xl font-semibold text-purple-600">Robofly Technology Pvt Ltd </ul>
              <ul className="text-xl text-fuchsia-300">Software Developer Intern</ul>
              <ul>• Built a Software, and collected and compiled a comprehensive dataset from various sources, enabling accurate analysis and decision-making, building a working Deep Learning Model.</ul>
              <ul>• Conducted extensive testing on multiple test sets to evaluate the performance and accuracy of the model. </ul>  
              <ul>• Conducted extensive experimentation and analysis to determine the most effective combination of techniques for feature extraction and augmentations.</ul> 
              </div>
          },
          {
            title: (
              <>
                <sub>Feb 2022 - March 2022</sub>
              </>
            ),
            content: <div>
              <ul className="text-2xl font-semibold text-purple-600">Microsoft in Global Education and Knowledge Solutions India</ul>
              <ul className="text-xl text-fuchsia-300">Data Science Intern</ul>
              <ul>• Developed a wine quality prediction model using machine learning techniques, achieving an accuracy of 94%.</ul>
              <ul>• Conducted exploratory data analysis (EDA) to understand the relationships between various wine attributes and quality ratings. </ul>  
              <ul>• Implemented various machine learning algorithms including decision trees, random forests, and gradient boosting machines (GBMs), optimizing hyperparameters through techniques like grid search and cross-validation.</ul> 
              </div>
          },
        ]}
      />
    </div>
  );
}
