import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-10 bg-gray-900 ">
      <h1 className="text-3xl font-bold text-white text-left mb-8">
        Shopping List ☑️
      </h1>
      <ItemList />
    </main>
  );
}
