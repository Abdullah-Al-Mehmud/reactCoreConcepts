export default function Friend({ friend }) {
  const { name, email, address } = friend;
  return (
    <>
      <h3>Name:{name}</h3>
      <p>email:{email}</p>
      <h3>address:{address.street}</h3>
    </>
  );
}
