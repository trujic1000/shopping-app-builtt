type ProductProps = {
    id: number;
    name: string;
    fullPrice: number;
    currentPrice: number;
    imgPath: string;
};

export default function Product({
    id,
    name,
    fullPrice,
    currentPrice,
    imgPath,
}: ProductProps) {
    return (
        <div>
            <img
                src={`/storage/${imgPath}`}
                alt={name}
                width="284"
                height="284"
            />
            <h2 className="mt-4 text-lg font-bold leading-6">{name}</h2>
            <div className="mt-2 flex align-top gap-1.5">
                <span className="text-2xl leading-8 tracking-tighter">
                    {currentPrice}
                </span>
                <span className="text-sm leading-4 tracking-wide">RSD</span>
            </div>
        </div>
    );
}
