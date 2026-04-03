export function Hero({ title, content }) {
    return (
        <div className="bg-bg-300 my-4 p-4 border-1 border-neutral-200 rounded-card">
            <p className="text-neutral-200 whitespace-pre-line text-[15px] font-500 mb-1">
                {title}
            </p>
            <div className="text-neutral-400 whitespace-pre-line text-[14px] font-400">
                {content}
            </div>
        </div>
    )
}