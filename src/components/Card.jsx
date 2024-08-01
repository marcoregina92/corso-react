function Card({ title, imgUrl, isVisited, children }) {

    const visitedLabel = isVisited ? "visitata" : "non visitata";

    const colorStyle = {
        color: isVisited ? "green" : "red"
    };


    return (
        <div className="rounded-md bg-zinc-950">
            <img className="rounded" src={imgUrl} alt="" />
            <div className="flex flex-col p-4">
                <h2 className="text-2xl text-white font-bold">{title}</h2>
                <p className="text-gray-500">{children}</p>
                <span style={colorStyle}>{visitedLabel}</span>
            </div>
        </div>
    )
}

export default Card;