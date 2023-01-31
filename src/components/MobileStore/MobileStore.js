import style from './MobileStore.module.css';

function MobileStore() {
    return(
        <div className={style['wrapper']}>
            <div className={style['block1']}>
                <h1>Step up your shopping game</h1>
                <p>How do you use BNPL? Spread the cost of your payment into installments and explore our flexible pay later options.</p>
            </div>
            <div className={style['block2']}>
                <h2>See you at checkout</h2>
                <p>Shop your favorite brands online or in-store and choose cashew at checkout.</p>
            </div>
        </div>
    )
}

export default MobileStore;