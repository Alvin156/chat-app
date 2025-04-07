import { useEffect } from 'react';

export default function PageWrapper(props) {
    useEffect(() => {
        document.title = props.pageTitle ?? 'Chat App';
    }, []);

    return <div>{props.children}</div>;
}
