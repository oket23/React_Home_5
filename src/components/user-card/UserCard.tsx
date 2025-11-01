import type {User} from "../../types/User.ts";

const UserCard = ({website, id, phone, username, name, email} : User) => {
    return (
        <div
            key={id}
            className="flex flex-col items-center m-3 p-3 md:m-5 md:p-5 gap-4 w-full max-w-[280px] border border-gray-200 rounded-2xl shadow-lg"
        >
            <img
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2"
                src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                alt={name}
            />
            <div className="flex flex-col items-center gap-1 text-center">
                <h1 className="text-xl font-medium text-gray-900">{name}</h1>
                <p className="text-base text-gray-500">@{username}</p>
                <a
                    href={`mailto:${email}`}
                    className="text-sm text-gray-600 hover:text-blue-600 hover:underline"
                >
                    {email}
                </a>
                <p className="text-sm text-gray-600">{phone}</p>
                <a
                    href={`https://${website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                >
                    {website}
                </a>
            </div>
        </div>
    );
};

export default UserCard;