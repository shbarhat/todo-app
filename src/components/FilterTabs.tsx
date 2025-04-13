import React from 'react';

interface FilterTabsProps {
  current: 'all' | 'active' | 'completed';
  onChange: (filter: 'all' | 'active' | 'completed') => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ current, onChange }) => {
  return (
    <div className="tabs">
      {['all', 'active', 'completed'].map(f => (
        <button
          key={f}
          className={current === f ? 'active' : ''}
          onClick={() => onChange(f as 'all' | 'active' | 'completed')}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
