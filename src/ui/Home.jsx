import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import { getUserName } from "../features/user/userSlice";

function Home() {
  const username = useSelector(getUserName);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The Best Pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven <br />
          Straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <>
          <h2 className="mb-8 text-xl capitalize">Welcome, {username}</h2>
          <Button to="/menu" type="primary">
            Start Ordering
          </Button>
        </>
      )}
    </div>
  );
}

export default Home;
