export function Button({ text="placeholder" }) {
    return (
        <button className='bg-primary-200 text-primary-400 px-2 py-1 my-4 border-1 border-primary-300 rounded-btn hover:bg-primary-400 hover:text-primary-200 transition-colors duration-[150ms]'>
            {text}
        </button>
    )
}