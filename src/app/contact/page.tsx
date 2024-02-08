import Contact from "@/constants/Contact";

export default function Page() {
  return (
    <div>
      <h4>Feel Free to Contact</h4>
      <ul>
        <li>
          이메일 : <a href={`mailto:${Contact.email}`}>{Contact.email}</a>
        </li>
        <li>
          학회장 개인 이메일 :{" "}
          <a href={`mailto:${Contact.personal_email}`}>
            {Contact.personal_email}
          </a>
        </li>
        <li>
          Instagram :<a href={Contact.instagram}>@ewha.chain</a>
        </li>
        <li>
          X (Twitter) :<a href={Contact.twitter}>@Ewhachain</a>
        </li>
      </ul>
    </div>
  );
}
