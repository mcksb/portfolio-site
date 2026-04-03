import { Pill } from 'app/components/common/pill';

export function Card({ title, content }) {
    return (
        <div className="bg-bg-300 my-4 p-4 border-1 border-neutral-200 rounded-card max-w-[50%]">
            <div className="flex items-center gap-4 pb-2">
                <Pill content={'React'}/>
                <Pill content={'2024'} colour="secondary" />
                <Pill content={'Work'} colour="tertiary" />
            </div>
            <p className="text-neutral-400 whitespace-pre-line text-[15px] font-500 pb-1">
                {title}
            </p>
            <div className="text-neutral-300 whitespace-pre-line text-[14px] font-400 pb-1">
                {content}
            </div>
        </div>
    )
}