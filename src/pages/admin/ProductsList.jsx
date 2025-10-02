import seedProducts from "../data/seedProducts";

function ProductsList() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">All Products</h2>
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Stock</th>
          </tr>
        </thead>
        <tbody>
          {seedProducts.map((product) => (
            <tr key={product.id}>
              <td className="p-2 border">{product.id}</td>
              <td className="p-2 border">{product.name}</td>
              <td className="p-2 border">${product.price}</td>
              <td className="p-2 border">{product.countInStock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsList;
