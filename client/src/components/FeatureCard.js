export const FeatureCard = ({value}) => {
    return(
        <div className="feature-card flex flex-col gap-5 col-span-1 w-full">
            <img src={value.icon} alt={value.title} className="w-max"/>
            <span className="title text-white text-2xl sm:text-3xl kode chip">{value.title}</span>
            <span className="des text-white">{value.des}</span>
        </div>
    )
}