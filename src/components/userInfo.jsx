function UserInfo({ data }) {
  return (
    <>
      <div>
        <h2>Name:{data.firstName} </h2>
        <h3>Age:{data.age}</h3>
        <h3>Gender:{data.gender}</h3>
      </div>
    </>
  );
}
export default UserInfo;
