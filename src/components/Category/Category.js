import style from './Category.module.css';

function Category() {
    const heandlerClick = () => {
        alert('Success event');
    }
    return(
        <div className={style['container']}>
            <h1 className={style['h1']}>Categories</h1>
            <div className={style['wrapper']}>
                <div className={style['item1']}>
                    <div className={style['img']}></div>
                    <div className={style['btn']} onClick={heandlerClick}>Electronics</div>
                </div>
                <div className={style['item2']}>
                    <div className={style['img']}></div>
                    <div className={style['btn']} onClick={heandlerClick}>Fashion & accessories</div>
                </div>
                <div className={style['item3']}>
                    <div className={style['img']}></div>
                    <div className={style['btn']} onClick={heandlerClick}>Beauty & health</div>
                </div>
                <div className={style['item4']}>
                    <div className={style['img']}></div>
                    <div className={style['btn']} onClick={heandlerClick}>Home & furniture</div>
                </div>
            </div>
            <div className={style['allBtn']} onClick={heandlerClick}>
                <p>View all</p>
                <div className={style['arrow']}></div>
            </div>
        </div>
    )
}

export default Category;