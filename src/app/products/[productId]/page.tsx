interface ProductProps {
  params: { productId: string };
}

export default async function ProductPage({
  params: { productId },
}: ProductProps) {
  const response = await fetch(
    `https://apishopv2.yerevan-city.am/api/Product/Get/${productId}`
  );
  const { name } = await response.json();

  return (
    <article className="">
      <h1 className="">{name}</h1>
      <p className="">{name}</p>
    </article>
  );
}
