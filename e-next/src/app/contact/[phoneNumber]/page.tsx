export default function PhoneNumber({
  params,
}: {
  params: { phoneNumber: string };
}) {
  return (
    <>
      <h1>Phone Number : {params.phoneNumber}</h1>
    </>
  );
}
