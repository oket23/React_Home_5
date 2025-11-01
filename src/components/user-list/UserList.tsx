import { useFetch } from "../../hooks/use-fetch/UseFetch.tsx";
import { useEffect } from "react";
import UserCard from "../user-card/UserCard.tsx";
import type {User} from "../../types/User.ts";


const UserList = () => {
    const { data, isLoading, error, request } = useFetch<User[]>(
        "https://jsonplaceholder.typicode.com/users"
    );

    useEffect(() => {
        const controller = new AbortController();
        request("https://jsonplaceholder.typicode.com/users", controller.signal);

        return () => {
            controller.abort();
        };
    }, [request]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data) return <p>Something went wrong</p>;

    return (
        <div className="flex flex-wrap justify-center">
            {data.map((user) => (
                <UserCard name={user.name} email={user.email} phone={user.phone} website={user.website} id={user.id} username={user.username} />
            ))}
        </div>
    );
};

export default UserList;
