export type Profile = {
    name: string;
    title: string;
    img: string;
    details: string[]
}

export const Profile = ({name, title, img, details}:Profile) => {
    return (
        <div className="
                flex flex-col h-[100%] justify-center items-center w-[25rem]
                bg-black rounded-lg border-2 border-[#111827]
                p-10 my-5
            ">
            <img
                className="w-40 rounded-full m-10"
                src={img}
            />
            <h2 className="text-2xl mb-2">{name}</h2>
            <p className="text-sm text-white/50 mb-10">{title}</p>
            { details.map((detail) => {
                return (
                    <p className="mb-5">
                        {detail}
                    </p>
                )
            })}
        </div>
    )
}
