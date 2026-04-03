import { Button } from 'app/components/common/button';
import { Card } from 'app/components/common/card';
import { Hero } from 'app/components/common/hero';
import { Pill } from 'app/components/common/pill';
import { Typewriter } from './components/common/typewriter';
import { VscCircleSmallFilled } from 'react-icons/vsc';

export default function Page() {
  
  return (
  <>
    <div className="flex items-center gap-4">
      <p className="text-primary-300">
        AVAILABLE FOR WORK
      </p>
      <p className="text-neutral-300">
        /
      </p>
      <p className="text-secondary-300">
        NOT AVAILABLE FOR WORK
      </p>
    </div>
    <h1 className="text-neutral-500 text-[28px] font-normal whitespace-pre-line">
      {`Junior developer,
      building for the web`}
    </h1>
    <ul className="flex items-center gap-2 text-neutral-300 mb-4">
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
    <div className='flex items-center gap-4'>
      <Button text={'Button'}/>
      <Pill content={'Pill'} />
    </div>
    <section>
      <Hero 
        title={'// this is a hero'}
        content={<Typewriter phrases={[
          'this is the first phrase of the typewriter.',
          'a second phrase of the typewriter has appeared.',
          'i cant believe i got three phrases in the typewriter.'
          ]}
        />}
      />
    </section>
    <div className="flex items-center gap-4">
      <Card title={'Weather app'} content={'Real-time data with location search.'} />
      <Card title={'REST API'} content={'Auth and CRUD with Express.'} />
    </div>
  </>
  )
}
