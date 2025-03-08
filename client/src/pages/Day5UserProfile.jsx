import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Day5UserProfile.css';

// Import images
import userAvatar from '../assets/profiles/user-avatar.jpg';
import friend1 from '../assets/profiles/friend1.jpg';
import friend2 from '../assets/profiles/friend2.jpg';
import friend3 from '../assets/profiles/friend3.jpg';
import friend4 from '../assets/profiles/friend4.jpg';
import friend5 from '../assets/profiles/friend5.jpg';

// Icon components for simplicity
const Trophy = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>;
const Medal = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path><path d="M11 12 5.12 2.2"></path><path d="m13 12 5.88-9.8"></path><path d="M8 7h8"></path><circle cx="12" cy="17" r="5"></circle><path d="M12 18v-2h-.5"></path></svg>;
const Target = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>;
const Clock = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const Users = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const ChevronRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>;

const Day5UserProfile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // User data (static for this example)
  const userData = {
    username: "NeonHunter",
    level: 87,
    xp: 8750,
    xpToNextLevel: 10000,
    rank: "Diamond II",
    avatar: userAvatar,
    lastActive: "2 hours ago",
    memberSince: "March 2022",
    status: "Online",
    
    stats: {
      totalMatches: 1342,
      wins: 873,
      losses: 469,
      winRate: "65.1%",
      kdRatio: 2.8,
      accuracy: "72%",
      playtime: "637 hours",
      favoriteWeapon: "Plasma Rifle",
      favoriteMap: "Neon Valley",
    },
    
    achievements: [
      { id: 1, name: "First Blood", description: "Win your first match", date: "Mar 15, 2022", icon: "🏆" },
      { id: 2, name: "Sharpshooter", description: "Achieve 80% accuracy in 5 consecutive matches", date: "Jun 23, 2022", icon: "🎯" },
      { id: 3, name: "Unstoppable", description: "Win 10 matches in a row", date: "Sep 10, 2022", icon: "🔥" },
      { id: 4, name: "Legend", description: "Reach Diamond rank", date: "Jan 5, 2023", icon: "👑" },
      { id: 5, name: "Veteran", description: "Play 1000+ matches", date: "Dec 18, 2023", icon: "⚔️" },
    ],
    
    recentMatches: [
      { id: 1, result: "Victory", map: "Neon Valley", score: "25-17", date: "Today", mode: "Team Deathmatch" },
      { id: 2, result: "Victory", map: "Cyber District", score: "3-2", date: "Today", mode: "Capture the Flag" },
      { id: 3, result: "Defeat", map: "Quantum Arena", score: "42-50", date: "Yesterday", mode: "Team Deathmatch" },
      { id: 4, result: "Victory", map: "Neural Network", score: "100-87", date: "Yesterday", mode: "Domination" },
      { id: 5, result: "Victory", map: "Digital Wasteland", score: "15-10", date: "2 days ago", mode: "Free for All" },
    ],
    
    friends: [
      { id: 1, username: "PixelWarrior", status: "Online", avatar: friend1, level: 92 },
      { id: 2, username: "VoidWalker", status: "In Match", avatar: friend2, level: 78 },
      { id: 3, username: "CyberNinja", status: "Offline", avatar: friend3, level: 85 },
      { id: 4, username: "QuantumSage", status: "Online", avatar: friend4, level: 64 },
      { id: 5, username: "TechSpectre", status: "Offline", avatar: friend5, level: 91 },
    ],
    
    loadout: [
      { slot: "Primary", item: "Plasma Rifle", rarity: "Legendary", level: 12 },
      { slot: "Secondary", item: "Quantum Pistol", rarity: "Epic", level: 10 },
      { slot: "Armor", item: "Neon Exosuit", rarity: "Legendary", level: 14 },
      { slot: "Tactical", item: "Holo Decoy", rarity: "Rare", level: 8 },
      { slot: "Ultimate", item: "Time Warp", rarity: "Exotic", level: 15 },
    ]
  };
  
  if (isLoading) {
    return (
      <div className="profile-container loading">
        <div className="loader"></div>
      </div>
    );
  }
  
  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <header className="profile-header">
          <div className="profile-avatar-container">
            <img src={userData.avatar} alt="Profile" className="profile-avatar" />
            <div className="profile-status" data-status={userData.status}></div>
          </div>
          
          <div className="profile-info">
            <h1 className="profile-username">{userData.username}</h1>
            <div className="profile-rank">{userData.rank}</div>
            <div className="profile-details">
              <span>Member since {userData.memberSince}</span>
              <span>Last active {userData.lastActive}</span>
            </div>
          </div>
          
          <div className="profile-level-container">
            <div className="profile-level">
              <span className="level-number">{userData.level}</span>
              <span className="level-label">LEVEL</span>
            </div>
            <div className="profile-xp-bar">
              <div 
                className="profile-xp-progress" 
                style={{ width: `${(userData.xp / userData.xpToNextLevel) * 100}%` }}
              ></div>
            </div>
            <div className="profile-xp-text">
              {userData.xp} / {userData.xpToNextLevel} XP
            </div>
          </div>
        </header>
        
        <nav className="profile-nav">
          <ul>
            <li 
              className={activeTab === 'overview' ? 'active' : ''} 
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </li>
            <li 
              className={activeTab === 'matches' ? 'active' : ''} 
              onClick={() => setActiveTab('matches')}
            >
              Matches
            </li>
            <li 
              className={activeTab === 'achievements' ? 'active' : ''} 
              onClick={() => setActiveTab('achievements')}
            >
              Achievements
            </li>
            <li 
              className={activeTab === 'friends' ? 'active' : ''} 
              onClick={() => setActiveTab('friends')}
            >
              Friends
            </li>
            <li 
              className={activeTab === 'loadout' ? 'active' : ''} 
              onClick={() => setActiveTab('loadout')}
            >
              Loadout
            </li>
          </ul>
        </nav>
        
        <main className="profile-content">
          {activeTab === 'overview' && (
            <div className="overview-container">
              <section className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon"><Trophy /></div>
                  <div className="stat-info">
                    <div className="stat-value">{userData.stats.wins}</div>
                    <div className="stat-label">Victories</div>
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-icon"><Medal /></div>
                  <div className="stat-info">
                    <div className="stat-value">{userData.stats.winRate}</div>
                    <div className="stat-label">Win Rate</div>
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-icon"><Target /></div>
                  <div className="stat-info">
                    <div className="stat-value">{userData.stats.kdRatio}</div>
                    <div className="stat-label">K/D Ratio</div>
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-icon"><Clock /></div>
                  <div className="stat-info">
                    <div className="stat-value">{userData.stats.playtime}</div>
                    <div className="stat-label">Playtime</div>
                  </div>
                </div>
              </section>
              
              <section className="profile-section">
                <h2 className="section-title">Recent Matches</h2>
                <div className="matches-list">
                  {userData.recentMatches.slice(0, 3).map(match => (
                    <div key={match.id} className={`match-card ${match.result.toLowerCase()}`}>
                      <div className="match-result">{match.result}</div>
                      <div className="match-details">
                        <div className="match-map">{match.map}</div>
                        <div className="match-mode">{match.mode}</div>
                      </div>
                      <div className="match-score">{match.score}</div>
                      <div className="match-date">{match.date}</div>
                      <div className="match-action"><ChevronRight /></div>
                    </div>
                  ))}
                  <button className="view-all-button" onClick={() => setActiveTab('matches')}>
                    View All Matches
                  </button>
                </div>
              </section>
              
              <section className="profile-section">
                <h2 className="section-title">Achievements</h2>
                <div className="achievements-grid">
                  {userData.achievements.slice(0, 3).map(achievement => (
                    <div key={achievement.id} className="achievement-card">
                      <div className="achievement-icon">{achievement.icon}</div>
                      <div className="achievement-info">
                        <div className="achievement-name">{achievement.name}</div>
                        <div className="achievement-desc">{achievement.description}</div>
                      </div>
                      <div className="achievement-date">{achievement.date}</div>
                    </div>
                  ))}
                  <button className="view-all-button" onClick={() => setActiveTab('achievements')}>
                    View All Achievements
                  </button>
                </div>
              </section>
              
              <section className="profile-section friends-section">
                <h2 className="section-title">Online Friends</h2>
                <div className="friends-grid">
                  {userData.friends.filter(friend => friend.status !== 'Offline').slice(0, 3).map(friend => (
                    <div key={friend.id} className="friend-card">
                      <img src={friend.avatar} alt={friend.username} className="friend-avatar" />
                      <div className="friend-status" data-status={friend.status}></div>
                      <div className="friend-info">
                        <div className="friend-name">{friend.username}</div>
                        <div className="friend-level">Level {friend.level}</div>
                      </div>
                    </div>
                  ))}
                  <button className="view-all-button" onClick={() => setActiveTab('friends')}>
                    View All Friends
                  </button>
                </div>
              </section>
            </div>
          )}
          
          {activeTab === 'matches' && (
            <div className="matches-container">
              <h2 className="section-title">Match History</h2>
              <div className="matches-list">
                {userData.recentMatches.map(match => (
                  <div key={match.id} className={`match-card ${match.result.toLowerCase()}`}>
                    <div className="match-result">{match.result}</div>
                    <div className="match-details">
                      <div className="match-map">{match.map}</div>
                      <div className="match-mode">{match.mode}</div>
                    </div>
                    <div className="match-score">{match.score}</div>
                    <div className="match-date">{match.date}</div>
                    <div className="match-action"><ChevronRight /></div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'achievements' && (
            <div className="achievements-container">
              <h2 className="section-title">Achievements</h2>
              <div className="achievements-grid full-grid">
                {userData.achievements.map(achievement => (
                  <div key={achievement.id} className="achievement-card">
                    <div className="achievement-icon">{achievement.icon}</div>
                    <div className="achievement-info">
                      <div className="achievement-name">{achievement.name}</div>
                      <div className="achievement-desc">{achievement.description}</div>
                    </div>
                    <div className="achievement-date">{achievement.date}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'friends' && (
            <div className="friends-container">
              <h2 className="section-title">Friends</h2>
              <div className="friends-grid full-grid">
                {userData.friends.map(friend => (
                  <div key={friend.id} className="friend-card">
                    <img src={friend.avatar} alt={friend.username} className="friend-avatar" />
                    <div className="friend-status" data-status={friend.status}></div>
                    <div className="friend-info">
                      <div className="friend-name">{friend.username}</div>
                      <div className="friend-level">Level {friend.level}</div>
                      <div className="friend-status-text">{friend.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'loadout' && (
            <div className="loadout-container">
              <h2 className="section-title">Current Loadout</h2>
              <div className="loadout-grid">
                {userData.loadout.map(item => (
                  <div key={item.slot} className={`loadout-card rarity-${item.rarity.toLowerCase()}`}>
                    <div className="loadout-slot">{item.slot}</div>
                    <div className="loadout-item-name">{item.item}</div>
                    <div className="loadout-item-details">
                      <span className="loadout-rarity">{item.rarity}</span>
                      <span className="loadout-level">Level {item.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
      <Link to="/dailyui" className="back-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 19-7-7 7-7"/>
          <path d="M19 12H5"/>
        </svg>
        Back to Challenge Board
      </Link>
    </div>
  );
};

export default Day5UserProfile;