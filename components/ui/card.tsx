const Card = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={`bg-white border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}>
            {children}
        </div >
    );
};

export default Card;