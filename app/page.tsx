import { Button } from 'app/components/common/button';
import { Card } from 'app/components/common/card';
import { Hero } from 'app/components/common/hero';
import { Pill } from 'app/components/common/pill';
import { Typewriter } from 'app/components/common/typewriter';
import { contentfulTypewriter } from './util/contentful/client';
import { VscCircleSmallFilled } from 'react-icons/vsc';
import { VscChevronRight } from "react-icons/vsc";

export default async function Page() {
  const phrases = await contentfulTypewriter('homepage');

  return (
  <>
    <div className="flex items-center gap-4">
      <p className="text-primary-300">
        AVAILABLE FOR WORK
      </p>
    </div>
    
    <div className="text-neutral-500 text-[18px] sm:text-[28px] font-[400] font-[400] min-h-16 sm:min-h-24 py-4">
      <h1>
        Junior developer,
      </h1>
      <h1 className="flex items-center gap-1">
        <VscChevronRight className="text-neutral-200" />
        <Typewriter 
          phrases={phrases}
          />
      </h1>
    </div>
    
    <ul className="flex items-center gap-2 text-xs font-[400] text-neutral-300">
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
    
    <div className="py-4">
      <Hero 
        title={'// current focus'}
        content={`const stack = {frontend: "React + Next.js", backend: "Node.js"}`}
      />
    </div>
    <Pill content='Projects' colour='primary' />
    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2 py-4">
      <Card title={'Weather app'} content={'Real-time data with location search.'} />
      <Card title={'REST API'} content={'Auth and CRUD with Express.'} />
      <Card title={'REST API'} content={'Auth and CRUD with Express.'} />
      <Card title={'REST API'} content={'Auth and CRUD with Express.'} />
      <Card title={'REST API'} content={'Auth and CRUD with Express.'} />
      <Card title={'REST API'} content={'Auth and CRUD with Express.'} />
    </div>
  </>
  )
}