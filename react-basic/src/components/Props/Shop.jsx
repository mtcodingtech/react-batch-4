import Fruit from "./Fruit";

function Shop() {
  return (
    <>
      <h1>Fruit Shop</h1>
      {/* <Fruit name="Apple" price="$10"></Fruit>
      <Fruit name="Orange"></Fruit>
      <Fruit name="Mango"></Fruit> */}
      <Fruit name="Apple" price="$20">
        <button>Click</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repudiandae omnis suscipit sunt consequatur temporibus ipsam sequi ab rem expedita esse fuga odio doloribus, quis similique possimus assumenda distinctio. Repudiandae!</p>
      </Fruit>
      <Fruit children={<h5>Hello Fruit</h5>} />
    </>
  );
}

export default Shop;
