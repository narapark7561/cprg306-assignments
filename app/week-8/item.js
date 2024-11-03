export default function Item({ name, quantity, category, onSelect }) {
  const handleClick = () => {
    if (onSelect) {
      onSelect();
    }
  };
  return (
    <div>
      <ul
        className="bg-gray-700 text-white max-w-96 rounded-lg p-4 mb-4"
        onClick={onSelect}
      >
        <h3 className="font-bold text-xl">{name}</h3>
        <p className="text-sm">
          Buy {quantity} in {category}
        </p>
      </ul>
    </div>
  );
}
