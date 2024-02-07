import Contact from "@/constants/Contact";

export default function Page() {
  return (
    <div>
      <h4>Feel Free to Contact</h4>
      <ul>
        <li>
          <a href={`mailto:${Contact.email}`}>{Contact.email}</a>
        </li>
        <li>
          <a href={Contact.instagram}>Instagram</a>
        </li>
        <li>
          <a href={Contact.twitter}>X</a>
        </li>
      </ul>
    </div>
  );
}
