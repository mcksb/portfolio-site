export function Hero({ title, content }) {
    return (
        <div className="bg-bg-300 p-4 border-1 border-neutral-200 rounded-card">
            <p className="text-neutral-200 whitespace-pre-line text-base sm:text-lg font-500 mb-1">
                {title}
            </p>
            <div className="text-neutral-400 whitespace-pre-wrap text-sm sm:text-base font-400">
                {content}
            </div>
        </div>
    )
}