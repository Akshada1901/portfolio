import React from 'react';

const ProfileImage = () => {
  // Update this path with the actual image link you want to use later
  // If you place 'profile.jpg' in the 'public' folder, it will work automatically
  const imagePath = "/Profile.jpeg"; 
  
  return (
    <div style={{
      width: '280px',
      height: '280px',
      borderRadius: '50%',
      padding: '8px',
      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: 'var(--bg-card)',
        overflow: 'hidden',
        border: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <img 
          src={imagePath} 
          alt="Akshada B" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
          onError={(e) => {
            // Fallback elegant placeholder if image is not found
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        {/* Placeholder shown if image fails to load */}
        <div style={{
          display: 'none',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          color: 'var(--text-secondary)'
        }}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
