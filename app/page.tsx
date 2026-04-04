import { Button } from 'app/components/common/button';
import { Card } from 'app/components/common/card';
import { Hero } from 'app/components/common/hero';
import { Pill } from 'app/components/common/pill';
import { Typewriter } from 'app/components/common/typewriter';
import { VscCircleSmallFilled } from 'react-icons/vsc';
import { VscChevronRight } from "react-icons/vsc";

export default function Page() {
  
  return (
  <>
    <div className="flex items-center gap-4">
      <p className="text-primary-300">
        AVAILABLE FOR WORK
      </p>
    </div>
    
    <div className="text-neutral-500 text-[28px] font-[400] font-normal whitespace-pre-line min-h-24">
      <h1>
        Junior developer,
      </h1>
      <h1 className="flex items-center gap-1">
        <VscChevronRight className="text-neutral-200 text-[24px]" />
        <Typewriter 
          phrases={[
            'building for the web',
            'based in Dublin',
            'focused on React + Node.js',
            'interested in how systems behave',
            ]}
          />
      </h1>
    </div>
    
    <ul className="flex items-center gap-2 text-[14px] font-[400] text-neutral-300 mb-4">
      <li>
        React
      </li>
      <VscCircleSmallFilled />
      <li>
        Node.js
      </li>
      <VscCircleSmallFilled />
      <li>
        TypeScript
      </li>
      <VscCircleSmallFilled />
      <li>
        Next.js
      </li>
    </ul>
    
    <section>
      <Hero 
        title={'// this is a hero'}
        content={'empty'}
      />
    </section>
    
    <div className="grid grid-cols-2 items-center gap-4 my-8">
      <Card title={'Weather app'} content={'Real-time data with location search.'} />
      <Card title={'REST API'} content={'Auth and CRUD with Express.'} />
      <Card title={'REST API'} content={'Auth and CRUD with Express.'} />
      <Card title={'REST API'} content={'Auth and CRUD with Express.'} />
    </div>
  </>
  )
}
