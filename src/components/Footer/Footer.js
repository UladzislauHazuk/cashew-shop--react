import style from './Footer.module.css';

function Footer() {
    const heandlerClick = () => {
        alert('Success event');
    }
    return(
        <div className={style['wrapper']}>
            <div className={style['logo']} onClick={heandlerClick}></div>
            <nav>
                <p onClick={heandlerClick}>Company</p>
                <p onClick={heandlerClick}>Shoppers</p>
                <p onClick={heandlerClick}>Merchants</p>
                <p onClick={heandlerClick}>Subscribe</p>
            </nav>
        </div>
    )
}

export default Footer;