import style from './Header.module.css'

function Header() {
    const heandlerClick = () => {
        alert('Success event');
    }
    return (
        <div className={style['wrapper']}>
            <div className={style['logo']} onClick={heandlerClick}></div>
            <nav>
                <p onClick={heandlerClick}>Ways to pay</p>
                <p onClick={heandlerClick}>Shop</p>
                <p onClick={heandlerClick}>For business</p>
            </nav>
            <div className={style['login-btns']}>
                <div className={style['merchant-login']} onClick={heandlerClick}>Merchant login</div>
                <div className={style['customer-login']} onClick={heandlerClick}>Customer login</div>
            </div>
        </div>
    )
}

export default Header;