import { UserProps } from "../../types/usert";
import { MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';
import classes from './UserComponent.module.css';


export const UserComponent = ({ login, avatar_url, location, followers, following }: UserProps) => {
    return (
        <div className={classes.user}>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            {
                location &&
                <p className={classes.location}>
                    <MdLocationPin />
                    <span> {location}</span>
                </p>
            }
            <div className={classes.stats}>
                <div>
                    <p>Seguidores:</p>
                    <p className={classes.numbers}>{followers}</p>
                </div>
                <div>
                    <p>Seguindo:</p>
                    <p className={classes.numbers}>{following}</p>
                </div>
            </div>
            <Link to={`/repositories/${login}`}>Ver melhores projetos</Link>
        </div>
    )
}
