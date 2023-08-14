import { useSelector, useDispatch } from "react-redux";
// import { MDdeleteForever } from "react-icons";
import removeUser from "../store/UserSlice";

const DisplayUsers = () => {
  const dispatch = useDispatch();

  const myStyle = {
    marginLeft: "55%",
    color: "white",
    backgroundColor: "red",
  };
  const data = useSelector((state) => {
    return state.users;
  });
  // console.log(data);

  const deleteUser = (id) => {
    console.log("hi");
    dispatch(removeUser(id));
  };

  return (
    <>
      {data.map((user, id) => {
        return (
          <div key={id}>
            {user}
            <button style={myStyle} onClick={() => deleteUser}>
              Delete
              {/* <MDdeleteForever className="delete-icon" /> */}
            </button>
          </div>
        );
      })}
    </>
  );
};
// const Wrapper = styled.section;
export default DisplayUsers;
