export default function Input({ className = '', ...props }) {
    return (
        <input
            className={`w-full px-5 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 invalid:focus:outline-none invalid:focus:ring-2 invalid:focus:ring-red-500 ${className}`}
            {...props}
        />
    );
}
