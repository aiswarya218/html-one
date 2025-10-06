import React from 'react';
import linksData from '../data/linksData.json';
import './AboveFooterSection.css';

const AboveFooterSection = () => {
  return (
    <div className="above-footer-container">
      <div className="above-footer-links">
        {linksData.map((section) => (
          <div key={section.id} className="link-section">
            <h2>{section.mainTitle}</h2>
            <h3>{section.subTitle}</h3>
            {section.links.length === 1 && section.links[0].text.length > 200 ? (
              <p>{section.links[0].text}</p>
            ) : (
              <p>
                {section.links.map((link, linkIndex) => (
                  <React.Fragment key={link.id}>
                    <a href={link.url}>{link.text}</a>
                    {linkIndex < section.links.length - 1 && <span className="separator">|</span>}
                  </React.Fragment>
                ))}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboveFooterSection;