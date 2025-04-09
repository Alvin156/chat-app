import { useEffect } from 'react';

type PageWrapperProps = {
    pageTitle: string;
    className?: string;
    children: any;
};

export default function PageWrapper(props: PageWrapperProps) {
    useEffect(() => {
        document.title = props.pageTitle ?? 'Chat App';
    }, []);

    return <div className={props.className}>{props.children}</div>;
}
