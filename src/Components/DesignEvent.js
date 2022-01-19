import styles from './DesignEvent.module.css'

function DesignEvent() {
    return (
        <div className={styles.main_container}>
            <div className={styles.wrapper_container}>
                <div className={styles.header_container}>
                        <h3 className={styles.design_header}>
                            Design Event
                        </h3>
                        <a className={styles.more_event} href="" target={"_blank"}>More Events</a>
                </div>
                <div className={styles.content_container}>
            {/* 1 */}
                    <div className={styles.card_container}>
                            <img className={styles.event_image} src="https://i.pinimg.com/564x/42/09/1f/42091f95cfd84f1ce9a5bec3a1c1a35c.jpg" alt="Momo" />
                        <div className={styles.event_container}>
                            <div className={styles.event_top}>
                                <div className={styles.category_container}>
                                    <button className={styles.event_category}>K-Pop</button>
                                </div>
                                <div className={styles.event_button}>
                                        <button>S</button>
                                        <button>B</button>
                                </div>
                            </div>
                            <div className={styles.event_bot}>
                                <span className={styles.event_time}>SUN, 24 @ 1.15 AM WIB </span>
                                <span className={styles.event_title} >How to become a loyal fans of Momo</span>
                                <span className={styles.event_author}>by Hamdani Abdullah</span>
                            </div>
                        </div>
                    </div>
            {/* 2 */}
                    <div className={styles.card_container}>
                                    <img className={styles.event_image} src="https://i.pinimg.com/564x/42/09/1f/42091f95cfd84f1ce9a5bec3a1c1a35c.jpg" alt="Momo" />
                                <div className={styles.event_container}>
                                    <div className={styles.event_top}>
                                        <div className={styles.category_container}>
                                            <button className={styles.event_category}>K-Pop</button>
                                        </div>
                                        <div className={styles.event_button}>
                                                <button>S</button>
                                                <button>B</button>
                                        </div>
                                    </div>
                                    <div className={styles.event_bot}>
                                        <span className={styles.event_time}>SUN, 24 @ 1.15 AM WIB </span>
                                        <span className={styles.event_title} >How to become a loyal fans of Momo</span>
                                        <span className={styles.event_author}>by Hamdani Abdullah</span>
                                    </div>
                                </div>
                            </div>
                    {/* 3 */}
                            <div className={styles.card_container}>
                                    <img className={styles.event_image} src="https://i.pinimg.com/564x/42/09/1f/42091f95cfd84f1ce9a5bec3a1c1a35c.jpg" alt="Momo" />
                                <div className={styles.event_container}>
                                    <div className={styles.event_top}>
                                        <div className={styles.category_container}>
                                            <button className={styles.event_category}>K-Pop</button>
                                        </div>
                                        <div className={styles.event_button}>
                                                <button>S</button>
                                                <button>B</button>
                                        </div>
                                    </div>
                                    <div className={styles.event_bot}>
                                        <span className={styles.event_time}>SUN, 24 @ 1.15 AM WIB </span>
                                        <span className={styles.event_title} >How to become a loyal fans of Momo</span>
                                        <span className={styles.event_author}>by Hamdani Abdullah</span>
                                    </div>
                                </div>
                            </div>
                    {/* 4 */}
                            <div className={styles.card_container}>
                                    <img className={styles.event_image} src="https://i.pinimg.com/564x/42/09/1f/42091f95cfd84f1ce9a5bec3a1c1a35c.jpg" alt="Momo" />
                                <div className={styles.event_container}>
                                    <div className={styles.event_top}>
                                        <div className={styles.category_container}>
                                            <button className={styles.event_category}>K-Pop</button>
                                        </div>
                                        <div className={styles.event_button}>
                                                <button>S</button>
                                                <button>B</button>
                                        </div>
                                    </div>
                                    <div className={styles.event_bot}>
                                        <span className={styles.event_time}>SUN, 24 @ 1.15 AM WIB </span>
                                        <span className={styles.event_title} >How to become a loyal fans of Momo</span>
                                        <span className={styles.event_author}>by Hamdani Abdullah</span>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
        </div>
    )
}
export default DesignEvent;