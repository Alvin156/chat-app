import { Params } from '../../types/ws';

export default function MessageBox({ message }: { message: Params.Message }) {
    const displayName =
        message.author.name?.length >= 10
            ? message.author.name.substring(0, 7) + '...'
            : message.author.name;

    return (
        <div className="p-3 bg-gray-800 shadow rounded-lg w-fit max-w-[75%]">
            <div className="text-gray-300">
                {/* prettier-ignore */}
                <span className="hover:underline font-semibold cursor-pointer">{displayName}</span>
                :{' ' + message.content}
            </div>
        </div>
    );
}
