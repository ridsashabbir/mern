import { useSelector } from "react-redux";

const DisplayUsers = () => {
  const data = useSelector((state) => {
    return state.users;
  });
  console.log(data);
  return (
    <>
      {data.map((user, id) => {
        return <li key={id}>{user}</li>;
      })}
    </>
  );
};
// const Wrapper = styled.section;
export default DisplayUsers;
