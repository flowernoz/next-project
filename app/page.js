import "@styles/Home.css";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <section className="Home">
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,
          soluta?
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem fuga
          facere odit sint vitae architecto fugit voluptatibus? Quisquam
          voluptas debitis ipsam architecto numquam nobis cum id modi ratione,
          impedit a suscipit. Ratione, accusamus illo. Laborum error eum fuga,
          iure unde ipsum consequatur, asperiores sint nobis quod, itaque
          maiores possimus quibusdam.
        </p>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, asperiores assumenda error vitae unde blanditiis.
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            eligendi nam, et veniam nemo omnis eius fugit accusamus facilis
            saepe.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            possimus quas facilis, consequatur temporibus a pariatur perferendis
            labore!
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            deleniti et, ad impedit neque nesciunt pariatur labore ipsam
            expedita voluptates. Quasi?
          </li>
        </ul>
        <Image
          src="https://picsum.photos"
          width={300}
          height={400}
          alt="picsum"
        />
      </section>
    </>
  );
}
