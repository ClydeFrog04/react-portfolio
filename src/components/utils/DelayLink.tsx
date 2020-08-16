import React, { useEffect, useCallback, useState } from "react";
import { Link, useHistory } from "react-router-dom";


interface delayLinkProps{
    delay?: number;
    to: string;
    onDelayStart?: any;
    onDelayEnd?: any;
    className?:string;
    replace?: any;
}

const DelayLink:React.FC<delayLinkProps> = ({ replace, to, delay, onDelayStart, onDelayEnd, className, children }) => {
    let [isTimeOut, setIsTimeout] = useState(false);
    const [timeoutId, setTimeoutId] = React.useState<number | undefined>(undefined);
    let history = useHistory();
    useEffect(() => {
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [timeoutId]);
    useEffect(() => {
        if (isTimeOut) {
            let delayTimeOut = setTimeout(() => {
                if (replace) {
                    history.replace(to);
                } else {
                    history.push(to);
                }
                onDelayEnd();
                setIsTimeout(false);
            }, delay);
            setTimeoutId(delayTimeOut);
        }
    }, [delay, history, onDelayEnd, replace, to, isTimeOut]);
    const handleClick = useCallback(
        (e) => {
            onDelayStart(e, to);
            if (e.defaultPrevented) {
                return;
            }
            e.preventDefault();
            setIsTimeout(true);
        },
        [to, onDelayStart]
    );

    const linkProps = Object.assign({}, {
        to: to,
        delay: delay,
        onClick: handleClick,
        replace: replace
    });

    return (
        <Link className={className} {...linkProps}>
            {children}
        </Link>
    );
};

DelayLink.defaultProps = {
    delay: 0,
    onDelayStart: () => {},
    onDelayEnd: () => {}
};

export default DelayLink;