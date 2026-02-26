import pnLogo from '../assets/pn-logo.png';



export default function Header({ batchName }) {
    return (
        <header className="header">
            <img src="pn-logo.png" alt="Logo" className="logo" />
            <h1>students results for (fake batch name){batchName}</h1>
        </header>
    );
}
