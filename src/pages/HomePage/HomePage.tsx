import SearchComponent from "../../components/SearchComponent/SearchComponent";
import { useState } from 'react';
import { UserProps } from "../../types/usert";
import { UserComponent } from "../../components/UserComponent/UserComponent";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";


const Home = () => {
    const [user, setUser] = useState<UserProps | ''>();
    const [error, setError] = useState(false);

    const loadUser = async (userName: string) => {
        setError(false);
        setUser('');

        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();

        if (res.status === 404) {
            setError(true);
            return;
        }

        const { login, avatar_url, location, followers, following } = data;

        const userData: UserProps = {
            location,
            login,
            avatar_url,
            followers,
            following,
        };

        setUser(userData);
    };

    return (
        <div>
            <SearchComponent loadUser={loadUser} />
            {
                user && <UserComponent {...user} />
            }
            {
                error && <ErrorComponent />
            }
        </div>
    );
};

export default Home;