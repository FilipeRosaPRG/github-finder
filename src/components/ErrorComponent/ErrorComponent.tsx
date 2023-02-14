import classes from './ErrorComponent.module.css';

const ErrorComponent = () => {
    return (
        <div>
            <p className={classes.errorMessage}>Usuario não encontrado</p>
        </div>
    )
}

export default ErrorComponent