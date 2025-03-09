import React, { useState } from 'react';
import './SettingsPanel.css';

const SettingsPanel = ({ settings, updateSetting, closeSettings }) => {
  const [activeTab, setActiveTab] = useState('appearance');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="settings-panel">
      <div className="settings-header">
        <h2>Settings</h2>
        <button 
          className="close-button" 
          onClick={closeSettings}
          aria-label="Close settings"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div className="settings-tabs">
        <button 
          className={`tab-button ${activeTab === 'appearance' ? 'active' : ''}`}
          onClick={() => handleTabChange('appearance')}
        >
          Appearance
        </button>
        <button 
          className={`tab-button ${activeTab === 'accessibility' ? 'active' : ''}`}
          onClick={() => handleTabChange('accessibility')}
        >
          Accessibility
        </button>
      </div>
      
      <div className="settings-content">
        {activeTab === 'appearance' && (
          <div className="appearance-settings">
            <h3>Theme</h3>
            <div className="setting-option">
              <div className="setting-label">
                <span>Color Theme</span>
              </div>
              <div className="theme-selector">
                <button 
                  className={`theme-button light ${settings.theme === 'light' ? 'selected' : ''}`}
                  onClick={() => updateSetting('appearance', 'theme', 'light')}
                  aria-label="Light theme"
                >
                  <span className="sr-only">Light</span>
                </button>
                <button 
                  className={`theme-button dark ${settings.theme === 'dark' ? 'selected' : ''}`}
                  onClick={() => updateSetting('appearance', 'theme', 'dark')}
                  aria-label="Dark theme"
                >
                  <span className="sr-only">Dark</span>
                </button>
              </div>
            </div>
            
            <h3>Font Settings</h3>
            <div className="setting-option">
              <div className="setting-label">
                <span>Font Size</span>
              </div>
              <div className="select-wrapper">
                <select 
                  value={settings.fontSize} 
                  onChange={(e) => updateSetting('appearance', 'fontSize', e.target.value)}
                  aria-label="Select font size"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
            </div>
            
            <div className="setting-option">
              <div className="setting-label">
                <span>Font Family</span>
              </div>
              <div className="select-wrapper">
                <select 
                  value={settings.fontFamily} 
                  onChange={(e) => updateSetting('appearance', 'fontFamily', e.target.value)}
                  aria-label="Select font family"
                >
                  <option value="default">Default</option>
                  <option value="serif">Serif</option>
                  <option value="mono">Monospace</option>
                </select>
              </div>
            </div>
            
            <h3>Color Settings</h3>
            <div className="setting-option">
              <div className="setting-label">
                <span>Primary Color</span>
              </div>
              <div className="color-selector">
                <button 
                  className="color-button indigo" 
                  onClick={() => updateSetting('appearance', 'primaryColor', '#6366f1')}
                  aria-label="Indigo color"
                  style={{backgroundColor: '#6366f1', border: settings.primaryColor === '#6366f1' ? '2px solid black' : 'none'}}
                >
                  <span className="sr-only">Indigo</span>
                </button>
                <button 
                  className="color-button blue" 
                  onClick={() => updateSetting('appearance', 'primaryColor', '#3b82f6')}
                  aria-label="Blue color"
                  style={{backgroundColor: '#3b82f6', border: settings.primaryColor === '#3b82f6' ? '2px solid black' : 'none'}}
                >
                  <span className="sr-only">Blue</span>
                </button>
                <button 
                  className="color-button green" 
                  onClick={() => updateSetting('appearance', 'primaryColor', '#10b981')}
                  aria-label="Green color"
                  style={{backgroundColor: '#10b981', border: settings.primaryColor === '#10b981' ? '2px solid black' : 'none'}}
                >
                  <span className="sr-only">Green</span>
                </button>
                <button 
                  className="color-button red" 
                  onClick={() => updateSetting('appearance', 'primaryColor', '#ef4444')}
                  aria-label="Red color"
                  style={{backgroundColor: '#ef4444', border: settings.primaryColor === '#ef4444' ? '2px solid black' : 'none'}}
                >
                  <span className="sr-only">Red</span>
                </button>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'accessibility' && (
          <div className="accessibility-settings">
            <h3>Vision</h3>
            <div className="setting-option">
              <div className="setting-info">
                <div className="setting-label">Colorblind Mode</div>
                <div className="setting-description">Enhances color contrast for color vision deficiencies</div>
              </div>
              <div className="toggle-switch">
                <input 
                  type="checkbox" 
                  id="colorblind-toggle" 
                  checked={settings.colorBlindMode} 
                  onChange={(e) => updateSetting('accessibility', 'colorBlindMode', e.target.checked)}
                />
                <label htmlFor="colorblind-toggle" aria-label="Toggle colorblind mode"></label>
              </div>
            </div>
            
            <div className="setting-option">
              <div className="setting-info">
                <div className="setting-label">High Contrast</div>
                <div className="setting-description">Maximizes contrast between text and background</div>
              </div>
              <div className="toggle-switch">
                <input 
                  type="checkbox" 
                  id="contrast-toggle" 
                  checked={settings.highContrast} 
                  onChange={(e) => updateSetting('accessibility', 'highContrast', e.target.checked)}
                />
                <label htmlFor="contrast-toggle" aria-label="Toggle high contrast"></label>
              </div>
            </div>
            
            <div className="setting-option">
              <div className="setting-info">
                <div className="setting-label">Large Text</div>
                <div className="setting-description">Increases text size throughout the application</div>
              </div>
              <div className="toggle-switch">
                <input 
                  type="checkbox" 
                  id="largetext-toggle" 
                  checked={settings.largeText} 
                  onChange={(e) => updateSetting('accessibility', 'largeText', e.target.checked)}
                />
                <label htmlFor="largetext-toggle" aria-label="Toggle large text"></label>
              </div>
            </div>
            
            <div className="setting-option">
              <div className="setting-info">
                <div className="setting-label">Readable Font</div>
                <div className="setting-description">Uses a simpler, more readable font</div>
              </div>
              <div className="toggle-switch">
                <input 
                  type="checkbox" 
                  id="readablefont-toggle" 
                  checked={settings.readableFont} 
                  onChange={(e) => updateSetting('accessibility', 'readableFont', e.target.checked)}
                />
                <label htmlFor="readablefont-toggle" aria-label="Toggle readable font"></label>
              </div>
            </div>
            
            <h3>Motion & Interaction</h3>
            <div className="setting-option">
              <div className="setting-info">
                <div className="setting-label">Reduce Motion</div>
                <div className="setting-description">Minimizes animations and transitions</div>
              </div>
              <div className="toggle-switch">
                <input 
                  type="checkbox" 
                  id="motion-toggle" 
                  checked={settings.reduceMotion} 
                  onChange={(e) => updateSetting('accessibility', 'reduceMotion', e.target.checked)}
                />
                <label htmlFor="motion-toggle" aria-label="Toggle reduce motion"></label>
              </div>
            </div>
            
            <div className="setting-option">
              <div className="setting-info">
                <div className="setting-label">Screen Reader Optimized</div>
                <div className="setting-description">Improves compatibility with screen readers</div>
              </div>
              <div className="toggle-switch">
                <input 
                  type="checkbox" 
                  id="screenreader-toggle" 
                  checked={settings.screenReaderOptimized} 
                  onChange={(e) => updateSetting('accessibility', 'screenReaderOptimized', e.target.checked)}
                />
                <label htmlFor="screenreader-toggle" aria-label="Toggle screen reader optimization"></label>
              </div>
            </div>
            
            <div className="setting-option">
              <div className="setting-info">
                <div className="setting-label">Keyboard Focus Highlight</div>
                <div className="setting-description">Enhances visibility of keyboard focus indicators</div>
              </div>
              <div className="toggle-switch">
                <input 
                  type="checkbox" 
                  id="focus-toggle" 
                  checked={settings.keyboardFocusHighlight} 
                  onChange={(e) => updateSetting('accessibility', 'keyboardFocusHighlight', e.target.checked)}
                />
                <label htmlFor="focus-toggle" aria-label="Toggle keyboard focus highlight"></label>
              </div>
            </div>
            
            <h3>Reading & Comprehension</h3>
            <div className="setting-option">
              <div className="setting-info">
                <div className="setting-label">Dyslexia Friendly</div>
                <div className="setting-description">Uses fonts and spacing optimized for dyslexia</div>
              </div>
              <div className="toggle-switch">
                <input 
                  type="checkbox" 
                  id="dyslexia-toggle" 
                  checked={settings.dyslexiaFriendly} 
                  onChange={(e) => updateSetting('accessibility', 'dyslexiaFriendly', e.target.checked)}
                />
                <label htmlFor="dyslexia-toggle" aria-label="Toggle dyslexia friendly mode"></label>
              </div>
            </div>
            
            <div className="setting-option">
              <div className="setting-info">
                <div className="setting-label">Audio Feedback</div>
                <div className="setting-description">Provides audio cues for important actions</div>
              </div>
              <div className="toggle-switch">
                <input 
                  type="checkbox" 
                  id="audio-toggle" 
                  checked={settings.audioFeedback} 
                  onChange={(e) => updateSetting('accessibility', 'audioFeedback', e.target.checked)}
                />
                <label htmlFor="audio-toggle" aria-label="Toggle audio feedback"></label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsPanel;