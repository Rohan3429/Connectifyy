import React from 'react';
import styles from './Account.module.css';

const Account = () => {
    return (
        <div className={styles.accountSetup}>
            <img className={styles.icon} alt="" src="05 1.png" />
            <div className={styles.accountSetupChild} />
            <div className={styles.accountSetupItem} />
            <div className={styles.accountSetupInner} />
            <div className={styles.rectangleDiv} />
            <div className={styles.setupYourAccountParent}>
                <b className={styles.setupYourAccount}>Setup your account</b>
                <div className={styles.heyStudentGlad}>Hey student! Glad to have you, fill the information to setup your basic profile.</div>
            </div>
            <div className={styles.inputFieldParent}>
                <div className={styles.inputField}>
                    <div className={styles.label}>First Name</div>
                    <div className={styles.input}>
                        <div className={styles.value}>Evan</div>
                    </div>
                </div>
                <div className={styles.inputField}>
                    <div className={styles.label}>Last Name</div>
                    <div className={styles.input}>
                        <div className={styles.value}>Tony</div>
                    </div>
                </div>
                <div className={styles.inputField}>
                    <div className={styles.label}>Personal Email</div>
                    <div className={styles.input}>
                        <div className={styles.value}>evant@gmail.com</div>
                    </div>
                </div>
                <div className={styles.inputField}>
                    <div className={styles.label}>Enrollment No.</div>
                    <div className={styles.input}>
                        <div className={styles.value}>21012011145</div>
                    </div>
                </div>
                <div className={styles.inputField4}>
                    <div className={styles.label}>LinkedIn Profile</div>
                    <div className={styles.input}>
                        <div className={styles.value}>www.linkedin.com/in/evantony45</div>
                    </div>
                </div>
                <div className={styles.radioField}>
                    <div className={styles.checkboxAndLabel}>
                        <img className={styles.radioIcon} alt="" src="Radio.svg" />
                        <div className={styles.label5}>Male</div>
                    </div>
                </div>
                <div className={styles.radioField1}>
                    <div className={styles.checkboxAndLabel}>
                        <div className={styles.radio} />
                        <div className={styles.label5}>Female</div>
                    </div>
                </div>
                <div className={styles.tagToggleGroup}>
                    <div className={styles.tagToggle}>
                        <img className={styles.checkIcon} alt="" src="Check.svg" />
                        <div className={styles.title}>GDSC</div>
                    </div>
                    <div className={styles.tagToggle1}>
                        <div className={styles.title}>IEEE</div>
                    </div>
                    <div className={styles.tagToggle}>
                        <img className={styles.checkIcon} alt="" src="Check.svg" />
                        <div className={styles.title}>Cultural Club</div>
                    </div>
                    <div className={styles.tagToggle1}>
                        <div className={styles.title}>Coding Club</div>
                    </div>
                </div>
                <div className={styles.checkboxField}>
                    <div className={styles.checkboxAndLabel}>
                        <div className={styles.checkbox} />
                        <div className={styles.label5}>Allow everyone to see my profile</div>
                    </div>
                </div>
                <div className={styles.button}>
                    <div className={styles.title}>Setup Profile</div>
                </div>
            </div>
            <div className={styles.notification}>
                <div className={styles.title4}>
                    <img className={styles.infoIcon} alt="" src="Info.svg" />
                    <div className={styles.stack}>
                        <div className={styles.content}>
                            <div className={styles.title5}>Note</div>
                            <div className={styles.label}>You can add more info to your profile later!</div>
                        </div>
                    </div>
                    <div className={styles.iconButton}>
                        <img className={styles.xIcon} alt="" src="X.svg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
