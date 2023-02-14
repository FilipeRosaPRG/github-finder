import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from './RepositoriesPage.module.css';
import { Link } from 'react-router-dom';

interface Repository {
    id: number;
    name: string;
}

const RepositoriesPage = () => {
    const [repos, setRepos] = useState<Repository[]>([]);
    const { username } = useParams<{ username: string }>();

    useEffect(() => {
        const fetchRepos = async () => {
            const res = await fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=5`);
            const data = await res.json();
            setRepos(data);
        };
        fetchRepos();
    }, [username]);

    return (
        <div className={classes.repositoriesContainer}>
            <Link className={classes.backButton} to="/">Voltar</Link>

            <h2>Top 5 repositories for {username}</h2>
            <ul>
                {repos.map(repo => (
                    <li key={repo.id}>{repo.name} </li>

                ))}
            </ul>
        </div>
    );
};

export default RepositoriesPage;
