export function Pill({ content="test", colour="primary" }) {
    const colourMap = {
        primary: {
            bg: 'bg-primary-200',
            border: 'border-primary-300',
            text: 'text-primary-400',
        },
        secondary: {
            bg: 'bg-secondary-200',
            border: 'border-secondary-300',
            text: 'text-secondary-400',
        },
        tertiary: {
            bg: 'bg-tertiary-200',
            border: 'border-tertiary-300',
            text: 'text-tertiary-400'
        },
    }
    const { bg, border, text } = colourMap[colour];
    
    return (
        <>
            <div className={`${bg} ${border} ${text} text-[11px] font-400 border-1 px-2 rounded-pill`}>
                {content}
            </div>
        </>
    )
}