import { useSelector } from "react-redux";

const DisplayUsers = () => {
    const data = useSelector((state) => {
        return state.users;
    })
    console.log(data)
return <></>
}
// const Wrapper = styled.section;
export default DisplayUsers;