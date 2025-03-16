import './banner.css';

const BudgetBanner = () => {
    return (
      <header className="Banner-header">
        <img src="/dollar.png" alt="Dollar Sign" className="dollar-icon"/>
        <span className="Banner-text">Budget Wise</span>
        <img src="/dollar.png" alt="Dollar Sign" className="dollar-icon"/>
      </header>
    );
  };
  
export default BudgetBanner;