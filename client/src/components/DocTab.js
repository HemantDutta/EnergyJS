export const DocTab = ({head, tag, children}) => {
    return(
        <>
            <div className="component-container flex flex-col gap-5">
                <header className="flex flex-col gap-3">
                    <span className="head text-3xl sm:text-5xl font-bold text-white">{head}</span>
                    <span className="tag blue-2">{tag}</span>
                </header>
                <div className="content flex flex-col gap-3">
                    {children}
                </div>
            </div>
        </>
    )
}