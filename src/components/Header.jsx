import pnLogo from '../assets/pn-logo.png';



export default function Header({ batchName }) {
    return (
        <header id="header">
            <img src={pnLogo} alt="Logo"  />
            <h1>students results for (fake batch name){batchName}</h1>
        </header>
    );
}
