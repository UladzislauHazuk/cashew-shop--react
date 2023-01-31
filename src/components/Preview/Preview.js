import style from './Preview.module.css';

function Preview() {
    return(
        <div className={style['wrapper']}>
            <div className={style['img']}></div>
        </div>
    )
}

export default Preview;