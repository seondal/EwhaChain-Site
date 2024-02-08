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
          개인 이메일 :
          <a href={`mailto:${Contact.personal_email}`}>
            {Contact.personal_email}
          </a>
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
