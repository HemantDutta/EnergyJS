export const SubDocTab = ({head, tag, children}) => {
    return(
        <>
            <div className="component-container pl-5 py-5 border-l-2 border-slate-700 transition hover:border-l-white flex flex-col gap-5">
                <header className="flex flex-col gap-3">
                    <span className="head text-2xl sm:text-3xl font-bold text-white">{head}</span>
                    <span className="tag blue-2">{tag}</span>
                </header>
                <div className="content flex flex-col gap-3">
                    {children}
                </div>
            </div>
        </>
    )
}