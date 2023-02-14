import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from './RepositoriesPage.module.css';
import { Link } from 'react-router-dom';
import {
    AiOutlineFork,
    AiOutlineStar
} from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';


interface Repository {
    forks: string;
    stargazers_count: string;
    language: string;
    html_url: string;
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

            <h2>Top 5 repositórios de {username}</h2>
            <div>
                {repos.map(repo => (

                    <div className={classes.repositoriesCard} key={repo.id}>
                        <h3>{repo.name}</h3>
                        <p>
                            <div className={classes.rowStats}>
                                <BsCodeSlash />
                                {repo.language}
                            </div>

                        </p>
                        <div >

                            <div className={classes.rowStats}>
                                <div className={classes.statsIcon}>
                                    <AiOutlineFork />
                                </div>


                                {repo.forks}

                            </div>


                            <div className={classes.rowStats}>
                                <div className={classes.statsIcon}>
                                    <AiOutlineStar />
                                </div>
                                {repo.stargazers_count}
                            </div>

                        </div>

                        <a className={classes.codeButton} href={repo.html_url} target="_blank" rel="noreferrer">Ver código</a>
                    </div>

                ))}
            </div>
        </div >
    );
};

export default RepositoriesPage;
